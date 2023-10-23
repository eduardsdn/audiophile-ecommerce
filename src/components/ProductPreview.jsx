import ProductPreviewCSS from "../styles/productPreview.module.css";
import ButtonsCSS from "../styles/buttons.module.css";
import xx99_2Img from "../assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ProductPreview(props) {
  const navigate = useNavigate();
  // console.log(props.title.includes("XX99 Mark II"));
  console.log(props.title);
  console.log(props);
  return (
    <div className={ProductPreviewCSS.container}>
      <div
        className={ProductPreviewCSS.productPreview}
        id={`${props.isReverse ? ProductPreviewCSS.reversed : ""}`}
      >
        <img
          className={ProductPreviewCSS.productPreviewImg}
          src={props.img}
          alt=""
        />
        <div className={ProductPreviewCSS.ProductPreviewCSSContent}>
          <p className={ProductPreviewCSS.newProduct}>NEW PRODUCT</p>
          <h1 className={ProductPreviewCSS.title}>{props.title}</h1>
          <p className={ProductPreviewCSS.description}>{props.description}</p>
          <button
            className={`${ButtonsCSS.seeProductBtn} ${ProductPreviewCSS.productPreviewBtn}`}
            id={ButtonsCSS.orange}
            onClick={() => {
              if (props.productId === "xx992") {
                navigate("/product/xx992");
              } else if (props.productId === "xx991") {
                navigate("/product/xx991");
              } else if (props.productId === "xx59") {
                navigate("/product/xx59");
              } else if (props.productId === "zx9") {
                navigate("/product/zx9");
              } else if (props.productId === "zx7") {
                navigate("/product/zx7");
              } else if (props.productId === "yx1") {
                navigate("/product/yx1");
              }
            }}
          >
            SEE PRODUCT
          </button>
        </div>
      </div>
    </div>
  );
}
