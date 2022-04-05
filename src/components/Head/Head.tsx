import React from "react";
// styles
import style from "./Head.module.scss";
interface HeadI {
   checkBoxIsChecked: boolean;
   isCheckedChange: Function;
}
const Head: React.FC<HeadI> = ({ checkBoxIsChecked, isCheckedChange }) => {
   return (
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
   );
};

export default Head;
