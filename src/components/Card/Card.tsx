import React from "react";
// styles
import style from "./Card.module.scss";
// types
import { CardProps } from "../../types/types";

const Card: React.FC<CardProps> = ({
   url,
   cardName,
   authorName,
   available,
   quantity,
   price,
}) => {
   return (
      <div className={style.CardWrapper}>
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

export default Card;
