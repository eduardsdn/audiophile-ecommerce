import ProductPreviewCSS from "../styles/productPreview.module.css";
import ButtonsCSS from "../styles/buttons.module.css";

import { useNavigate } from "react-router-dom";

export default function ProductPreview(props) {
  const navigate = useNavigate();

  return (
    <div
      className={ProductPreviewCSS.productPreview}
      id={`${props.isReverse ? ProductPreviewCSS.reversed : ""}`}
    >
      <picture className={ProductPreviewCSS.productPreviewImg}>
        <source media="(max-width:1025px)" srcSet={props.imgTablet} />
        <img src={props.imgDesktop} alt="" />
      </picture>
      <div className={ProductPreviewCSS.ProductPreviewContent}>
        <h1 className={ProductPreviewCSS.title}>{props.title}</h1>
        <p className={ProductPreviewCSS.description}>{props.description}</p>
        <button
          className={`${ButtonsCSS.seeProductBtn} ${ProductPreviewCSS.productPreviewBtn}`}
          id={ButtonsCSS.orange}
          onClick={() => {
            navigate(`/products/${props.productId}`);
          }}
        >
          SEE PRODUCT
        </button>
      </div>
    </div>
  );
}
