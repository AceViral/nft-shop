import React from "react";
import Loader from "../Loader";
import style from "./Card.module.scss";

interface CardProps {
   id: number;
   url: string;
   cardName: string;
   authorName: string;
   available: number;
   quantity: number;
   price: number;
   loading: boolean;
}
const Card: React.FC<CardProps> = ({
   id,
   url,
   cardName,
   authorName,
   available,
   quantity,
   price,
   loading,
}) => {
   return loading ? (
      <Loader />
   ) : (
      <div className={style.CardWrapper} key={id}>
         <a href={url}>
            <div className={style.Card}>
               <div className={style.CardHead}>
                  <div className={style.CreatedBy}>
                     <h4>created by</h4>
                     <h3>{authorName}</h3>
                  </div>
                  <div className={style.CardName}>
                     <h5>{cardName}</h5>
                  </div>
               </div>
               <div className={style.CardFoot}>
                  <div className={style.Available}>
                     <h4>available</h4>
                     <h3>{`${available} of ${quantity}`}</h3>
                  </div>
                  <div className={style.Price}>
                     <h4>price</h4>
                     <h3>{price} ETH</h3>
                  </div>
               </div>
            </div>
         </a>
      </div>
   );
};

// const Card: React.FC<CardProps> = (props: any) => {
//    return props.loading ? (
//       <Loader />
//    ) : (
//       <div className={style.CardWrapper} key={props.product_id}>
//          <a href={props.json_nft_data.external_url}>
//             <div className={style.Card}>
//                <div className={style.CardHead}>
//                   <div className={style.CreatedBy}>
//                      <h4>created by</h4>
//                      <h3>{props.created_by.display_name}</h3>
//                   </div>
//                   <div className={style.CardName}>
//                      <h5>{props.json_nft_data.name}</h5>
//                   </div>
//                </div>
//                <div className={style.CardFoot}>
//                   <div className={style.Available}>
//                      <h4>available</h4>
//                      <h3>{`${props.quantity_available} of ${props.quantity_nfts_created}`}</h3>
//                   </div>
//                   <div className={style.Price}>
//                      <h4>price</h4>
//                      <h3>{props.initial_price} ETH</h3>
//                   </div>
//                </div>
//             </div>
//          </a>
//       </div>
//    );
// };

export default Card;
