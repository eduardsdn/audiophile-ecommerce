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
      <img
        className={ProductPreviewCSS.productPreviewImg}
        src={props.img}
        alt=""
      />
      <div className={ProductPreviewCSS.ProductPreviewContent}>
        <p className={ProductPreviewCSS.newProduct}>NEW PRODUCT</p>
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
