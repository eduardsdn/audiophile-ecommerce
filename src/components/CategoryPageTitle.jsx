import React from "react";
import categoryPageTitleCSS from "../styles/categoryPageTitle.module.css";

export default function CategotyPageTitle(props) {
  return (
    <div className={categoryPageTitleCSS.pageTitle}>{props.categoryTitle}</div>
  );
}
