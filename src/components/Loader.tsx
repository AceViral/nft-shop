import React from "react";
import ContentLoader from "react-content-loader";
import style from "../components/Card/Card.module.scss";

const Loader = () => (
   <div className={style.CardWrapper}>
      <ContentLoader
         speed={2}
         width={305}
         height={482}
         viewBox="0 0 305 482"
         backgroundColor="#f3f3f3"
         foregroundColor="#ecebeb"
      >
         <rect x="0" y="0" rx="10" ry="10" width="305" height="482" />
      </ContentLoader>
   </div>
);

export default Loader;
