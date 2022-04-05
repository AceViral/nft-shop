import React from "react";
import style from "./App.module.scss";
import Card from "./components/Card/Card";
import Head from "./components/Head/Head";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { fetchUsers } from "./store/reducers/ActionCreators";

function App() {
   const dispatch = useAppDispatch();
   const { data, isLoading, error } = useAppSelector(
      (state) => state.userReducer
   );
   React.useEffect(() => {
      dispatch(fetchUsers());
   }, []);

   const [checkBoxIsChecked, setCheckBoxIsChecked] = React.useState(true);

   const isCheckedChange = () => {
      setCheckBoxIsChecked(!checkBoxIsChecked);
   };

   const renderCards = () => {
      return (
         isLoading
            ? [...Array(12)]
            : data.filter((obj) =>
                 checkBoxIsChecked
                    ? obj.quantity_available > 0
                    : obj.quantity_available === 0
              )
      ).map((obj, index) => {
         return (
            <>
               {isLoading ? (
                  <Card
                     loading={isLoading}
                     id={0}
                     url={""}
                     cardName={""}
                     authorName={""}
                     available={0}
                     quantity={0}
                     price={0}
                  />
               ) : (
                  <Card
                     loading={isLoading}
                     id={obj.product_id}
                     url={obj.json_nft_data.external_url}
                     cardName={obj.json_nft_data.name}
                     authorName={obj.created_by.display_name}
                     available={obj.quantity_available}
                     quantity={obj.quantity_nfts_created}
                     price={obj.initial_price}
                  />
               )}
            </>
         );
      });
   };
   return (
      <div className={style.App}>
         <Head
            checkBoxIsChecked={checkBoxIsChecked}
            isCheckedChange={() => isCheckedChange()}
         />
         <div className={style.CardContainer}>
            {error ? (
               <h1>
                  Ooops...
                  <br />I caught the error
               </h1>
            ) : (
               renderCards()
            )}
         </div>
      </div>
   );
}

export default App;
