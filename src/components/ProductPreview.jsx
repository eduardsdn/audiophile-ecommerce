import ProductPreviewCSS from "../styles/productPreview.module.css";
import ButtonsCSS from "../styles/buttons.module.css";
import xx99_2Img from "../assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg";

export default function productPreview(props) {
  console.log(props.isReverse);

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
          >
            SEE PRODUCT
          </button>
        </div>
      </div>
    </div>
  );
}
