import ProductCSS from "../styles/product.module.css";
import ButtonCSS from "../styles/buttons.module.css";

import prodImg from "../assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg";

import img1 from "../assets/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg";
import img2 from "../assets/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg";
import img3 from "../assets/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg";

// HARDCODED VALUES FOR STYLING ONLY
export default function Product(props) {
  // console.log(props);
  // console.log(props.inTheBox);

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

  let splitFeatureText = splitFeaturesText();
  // console.log(splitFeatureText);
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
            <input type="number" />
            <button className={ButtonCSS.seeProductBtn} id={ButtonCSS.orange}>
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
            {/* <li className={ProductCSS.inTheBoxItem}>
              <span className={ProductCSS.inTheBoxItemAmount}>1x</span>
              <p className={ProductCSS.inTheBoxItemName}>Headphone Unit</p>
            </li>
            <li className={ProductCSS.inTheBoxItem}>
              <span className={ProductCSS.inTheBoxItemAmount}>2x</span>
              <p className={ProductCSS.inTheBoxItemName}>Replacement Earcups</p>
            </li>
            <li className={ProductCSS.inTheBoxItem}>
              <span className={ProductCSS.inTheBoxItemAmount}>1x</span>
              <p className={ProductCSS.inTheBoxItemName}>User Manual</p>
            </li>
            <li className={ProductCSS.inTheBoxItem}>
              <span className={ProductCSS.inTheBoxItemAmount}>1x</span>
              <p className={ProductCSS.inTheBoxItemName}>
                3.5mm 5m Audio Cable
              </p>
            </li>
            <li className={ProductCSS.inTheBoxItem}>
              <span className={ProductCSS.inTheBoxItemAmount}>1x</span>
              <p className={ProductCSS.inTheBoxItemName}>Travel Bag</p>
            </li> */}
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
