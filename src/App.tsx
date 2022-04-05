import axios from "axios";
import React from "react";
import style from "./App.module.scss";
import Card from "./components/Card/Card";

function App() {
   const [cards, setCards] = React.useState<any[]>([]);
   const [checkBoxIsChecked, setCheckBoxIsChecked] = React.useState(true);
   const [isLoading, setIsLoading] = React.useState(true);

   const isCheckedChange = () => {
      setCheckBoxIsChecked(!checkBoxIsChecked);
   };
   React.useEffect(() => {
      try {
         setIsLoading(true);
         async function fetchData() {
            const cardResponce = await axios.get(
               "https://artisant.io/api/products"
            );
            setIsLoading(false);
            setCards(cardResponce.data.data.products);
         }
         fetchData();
      } catch (error) {
         console.log(error);
      }
   }, []);

   const renderCards = () => {
      return (
         isLoading
            ? [...Array(12)]
            : cards.filter((obj) =>
                 checkBoxIsChecked
                    ? obj.quantity_available > 0
                    : obj.quantity_available === 0
              )
      ).map((obj, index) => {
         return (
            <Card
               loading={isLoading}
               // id={obj.product_id}
               // url={obj.json_nft_data.external_url}
               // cardName={obj.json_nft_data.name}
               // authorName={obj.created_by.display_name}
               // available={obj.quantity_available}
               // quantity={obj.quantity_nfts_created}
               // price={obj.initial_price}
               {...obj}
            />
         );
      });
   };
   return (
      <div className={style.App}>
         <div className={style.Head}>
            <div>
               <h1>Explore</h1>
               <p>Buy and sell digital fashion NFT art</p>
            </div>
            <div className={style.InputWrapper}>
               <h3>
                  {!checkBoxIsChecked
                     ? "Show available product"
                     : "Show the product that is on the way"}
               </h3>
               <input
                  type="checkbox"
                  checked={checkBoxIsChecked}
                  onChange={() => isCheckedChange()}
               />
            </div>
         </div>
         <div className={style.CardContainer}>{renderCards()}</div>
      </div>
   );
}

export default App;
