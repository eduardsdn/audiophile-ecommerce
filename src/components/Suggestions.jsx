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
  function getRelevantForSuggetionsProducts() {
    // removing proudct currently viewed on the page
    let relevantForSuggetionsProducts = props.productsData.filter((product) => {
      return product.title !== props.currentProduct;
    });

    // Getting rid of uneccessary attributes
    relevantForSuggetionsProducts = relevantForSuggetionsProducts.map(
      ({
        description,
        featuresText,
        isReverse,
        price,
        ...necessaryAttributes
      }) => necessaryAttributes
    );
    return relevantForSuggetionsProducts;
  }

  // get random product object from relevantForSuggetionsProducts
  function getRandomSuggestions() {
    let randomSuggestions = [];
    let relevantForSuggetionsProducts = getRelevantForSuggetionsProducts();

    function getRandomProductObject() {
      let randomProductObject = relevantForSuggetionsProducts.splice(
        (Math.random() * relevantForSuggetionsProducts.length) | 0,
        1
      );

      return randomProductObject;
    }

    for (let i = 0; i < 3; i++) {
      let randomSuggestion = getRandomProductObject()[0];
      if (randomSuggestions[i] === randomSuggestion) {
        randomSuggestion = getRandomProductObject()[0];
        randomSuggestions.push(randomSuggestion);
      } else randomSuggestions.push(randomSuggestion);
    }

    return randomSuggestions;
  }

  // console.log(getRelevantForSuggetionsProducts());
  console.log(getRandomSuggestions());

  return (
    <div className={SuggestionsCSS.suggestions}>
      <h1 className={SuggestionsCSS.suggestionsTitle}>You may also like</h1>
      <div className={SuggestionsCSS.suggetionsCards}>
        {getRandomSuggestions().map(function (randomSuggestion) {
          return (
            <div className={SuggestionsCSS.suggetionsCard}>
              <img
                className={SuggestionsCSS.img}
                src={randomSuggestion.img}
                alt=""
              />
              <h1 className={SuggestionsCSS.title}>{randomSuggestion.title}</h1>
              <button
                className={`${ButtonsCSS.seeProductBtn} ${SuggestionsCSS.suggetionsCardBtn}`}
                id={ButtonsCSS.orange}
              >
                See Product
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
