import suggestedXX59Img from "../assets/product-xx59-headphones/desktop/image-product.jpg";
import sugggestedX991Img from "../assets/product-xx99-mark-one-headphones/desktop/image-product.jpg";
import suggestedX992Img from "../assets/product-xx99-mark-two-headphones/desktop/image-product.jpg";
import suggestedYX1Img from "../assets/product-yx1-earphones/desktop/image-product.jpg";
import suggestedZX7Img from "../assets/product-zx7-speaker/desktop/image-product.jpg";
import suggestedZX9Img from "../assets/product-zx9-speaker/desktop/image-product.jpg";

import ButtonsCSS from "../styles/buttons.module.css";
import SuggestionsCSS from "../styles/suggestions.module.css";

import { useState } from "react";

export default function Suggestions(props) {
  const [productImgArr, setProductImgArr] = useState([
    suggestedXX59Img,
    sugggestedX991Img,
    suggestedX992Img,
    suggestedYX1Img,
    suggestedZX7Img,
    suggestedZX9Img,
  ]);

  function removeIrrelevantProduct() {
    let irrelevantProduct;
  }
}
