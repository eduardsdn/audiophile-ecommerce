import ProductCSS from "../styles/product.module.css";
import ButtonsCSS from "../styles/buttons.module.css";
import Suggestions from "./Suggestions";
import prodImg from "../assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg";

import { useState } from "react";
// HARDCODED VALUES FOR STYLING ONLY
export default function Product(props) {
  function splitFeaturesText() {
    let breakWord;
    if (props.title.includes("XX99 Mark II")) {
      breakWord = "beat.";
    } else if (props.title.includes("XX99 Mark I")) {
      breakWord = "oz.";
    } else if (props.title.includes("XX59")) {
      breakWord = "videos.";
    } else if (props.title.includes("ZX9")) {
      breakWord = "(100M).";
    } else if (props.title.includes("ZX7")) {
      breakWord = "usage.";
    } else if (props.title.includes("YX1")) {
      breakWord = "sound.";
    }

    return props.featuresText.split(breakWord);
  }

  const [productAmount, setProductAmount] = useState(1);
  console.log(props);

  return (
    <div className={ProductCSS.product}>
      <div className={ProductCSS.productCard}>
        <img
          className={ProductCSS.productCardImg}
          src={props.productImg}
          alt=""
        />
        <div className={ProductCSS.productCardContent}>
          <p className={ProductCSS.newProduct}>NEW PRODUCT</p>
          <h1 className={ProductCSS.title}>{props.title}</h1>
          <p className={ProductCSS.description}>{props.description}</p>
          <p className={ProductCSS.price}>{`$ ${props.price}`}</p>
          <div className={ProductCSS.productCardInterface}>
            {/* <input type="number" /> */}
            <div className={ButtonsCSS.inputStepper}>
              <button
                id={ButtonsCSS.decrement}
                onClick={() => {
                  if (productAmount > 1) {
                    setProductAmount(function (prevProductAamount) {
                      return prevProductAamount - 1;
                    });
                  }
                }}
              >
                {" "}
                -{" "}
              </button>
              <input
                className={ButtonsCSS.inputStepperValue}
                type="number"
                min="1"
                max="100"
                value={productAmount}
                readOnly={true}
              />
              <button
                id={ButtonsCSS.increment}
                onClick={() => {
                  setProductAmount(function (prevProductAamount) {
                    return prevProductAamount + 1;
                  });
                }}
              >
                {" "}
                +{" "}
              </button>
            </div>
            <button className={ButtonsCSS.seeProductBtn} id={ButtonsCSS.orange}>
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <div className={ProductCSS.productTextContent}>
        <div className={ProductCSS.productTextContentDescription}>
          <h1 className={ProductCSS.descriptionTitle}>Features</h1>
          <div className={ProductCSS.descriptionTextHolder}>
            <p
              className={ProductCSS.descriptionText}
              id={ProductCSS.describtionParOne}
            >
              {splitFeaturesText()[0]}
            </p>
            <p
              className={ProductCSS.descriptionText}
              id={ProductCSS.describtionParTwo}
            >
              {splitFeaturesText()[1]}
            </p>
          </div>
        </div>
        <div className={ProductCSS.inTheBox}>
          <h1 className={ProductCSS.inTheBoxTitle}>In the Box</h1>
          <ul className={ProductCSS.inTheBoxList}>
            {props.inTheBox.map(function (listItem) {
              return (
                <li className={ProductCSS.inTheBoxItem}>
                  <span className={ProductCSS.inTheBoxItemAmount}>
                    {listItem.amount}x
                  </span>
                  <p className={ProductCSS.inTheBoxItemName}>
                    {listItem.itemName}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className={ProductCSS.productImagesGrid}>
        <div className={ProductCSS.productImagesGridLeft}>
          <img src={props.decorImages[0]} alt="" />
          <img src={props.decorImages[1]} alt="" />
        </div>
        <img src={props.decorImages[2]} alt="" />
      </div>
    </div>
  );
}
