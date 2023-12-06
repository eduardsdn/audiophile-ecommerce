import ButtonsCSS from "../styles/buttons.module.css";
import SuggestionsCSS from "../styles/suggestions.module.css";

import { useNavigate } from "react-router-dom";

export default function Suggestions(props) {
  const navigate = useNavigate();

  function getRelevantForSuggetionsProducts() {
    // removing prouduct currently viewed on the page
    let relevantForSuggetionsProducts = props.productsData.filter((product) => {
      return product.productId !== props.currentProduct;
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
    // console.log(relevantForSuggetionsProducts);
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
        // ??????
        randomSuggestion = getRandomProductObject()[0];
        randomSuggestions.push(randomSuggestion);
      } else randomSuggestions.push(randomSuggestion);
    }
    return randomSuggestions;
  }

  return (
    <div className={SuggestionsCSS.suggestions}>
      <h1 className={SuggestionsCSS.suggestionsTitle}>You may also like</h1>
      <div className={SuggestionsCSS.suggetionsCards}>
        {getRandomSuggestions().map(function (randomSuggestion) {
          let title = randomSuggestion.title;
          console.log(randomSuggestion.title);
          // console.log(randomSuggestion.title.includes("HEADPHONES"));
          if (randomSuggestion.title.includes("Headphones")) {
            title = randomSuggestion.title.replace("Headphones", " ");
          } else if (randomSuggestion.title.includes("EARPHONES")) {
            title = randomSuggestion.title.replace("EARPHONES", " ");
          }

          return (
            <div className={SuggestionsCSS.suggetionsCard}>
              <img
                className={SuggestionsCSS.suggestionImg}
                src={randomSuggestion.img}
                alt=""
              />
              <h1 className={SuggestionsCSS.title}>{title}</h1>
              <button
                className={`${ButtonsCSS.seeProductBtn} ${SuggestionsCSS.suggetionsCardBtn}`}
                id={ButtonsCSS.orange}
                onClick={() => {
                  navigate(`/products/${randomSuggestion.productId}`);
                }}
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
