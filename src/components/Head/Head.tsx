import React from "react";
// styles
import style from "./Head.module.scss";
// SVG
import search from "../../images/search.svg";
import btn_remove from "../../images/btn-remove.svg";

interface HeadI {
   checkBoxIsChecked: boolean;
   isCheckedChange: Function;
   searchValue: string;
   setSearchValue: Function;
   onChangeSearchInput: any;
}
const Head: React.FC<HeadI> = ({
   checkBoxIsChecked,
   isCheckedChange,
   searchValue,
   setSearchValue,
   onChangeSearchInput,
}) => {
   return (
      <div className={style.Head}>
         <div className={style.logo}>
            <h1>Explore</h1>
            <p>Buy and sell digital fashion NFT art</p>
         </div>
         <div className={style.InputWrapper}>
            <div className={style.Input}>
               <div className={style.Image}>
                  {searchValue ? (
                     <img
                        src={btn_remove}
                        alt="Clear"
                        className={style.remove}
                        onClick={() => setSearchValue("")}
                     />
                  ) : (
                     <img src={search} alt="Search" className={style.search} />
                  )}
               </div>

               <input
                  type="text"
                  placeholder="Search by name"
                  value={searchValue}
                  onChange={onChangeSearchInput}
               />
            </div>
         </div>
         <div className={style.CheckBoxWrapper}>
            <input
               type="checkbox"
               checked={checkBoxIsChecked}
               onChange={() => isCheckedChange()}
            />
            <h3>
               {!checkBoxIsChecked
                  ? "Show available product"
                  : "Hide available product"}
            </h3>
         </div>
      </div>
   );
};

export default Head;
