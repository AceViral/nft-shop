import React, { useEffect, useState } from "react";
// styles
import style from "./App.module.scss";
// components
import Card from "../components/Card/Card";
import Head from "../components/Head/Head";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { fetchProducts } from "../store/productService/ActionCreators";
import Loader from "../components/Loader";

function App() {
   const dispatch = useAppDispatch();
   const [checkBoxIsChecked, setCheckBoxIsChecked] = useState(true);
   const { products, isLoading, error } = useAppSelector(
      (state) => state.productsReducer
   );
   useEffect(() => {
      dispatch(fetchProducts());
   }, []);

   const isCheckedChange = () => {
      setCheckBoxIsChecked(!checkBoxIsChecked);
   };

   const renderCards = () => {
      return (
         isLoading
            ? [...Array(12)]
            : products.filter((obj) =>
                 checkBoxIsChecked
                    ? obj.quantity_available > 0
                    : obj.quantity_available === 0
              )
      ).map((obj, index) => {
         if (isLoading) {
            return <Loader key={index} />;
         }
         return (
            <Card
               key={obj.product_id}
               url={obj.json_nft_data.external_url}
               cardName={obj.json_nft_data.name}
               authorName={obj.created_by.display_name}
               available={obj.quantity_available}
               quantity={obj.quantity_nfts_created}
               price={obj.initial_price}
            />
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
