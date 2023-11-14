import CategoriesCSS from "../styles/categories.module.css";
import ButtonsCSS from "../styles/buttons.module.css";
import categoriesHeadphonesImg from "../assets/shared/desktop/image-category-thumbnail-headphones.png";
import categoriesSpeakersImg from "../assets/shared/desktop/image-category-thumbnail-speakers.png";
import categoriesEarphonesImg from "../assets/shared/desktop/image-category-thumbnail-earphones.png";
import linkArrow from "../assets/shared/desktop/icon-arrow-right.svg";

import { useNavigate } from "react-router-dom";

export default function Categories(props) {
  const navigate = useNavigate();

  return (
    <div className={CategoriesCSS.container}>
      <div className={CategoriesCSS.categoriesCards}>
        <div className={CategoriesCSS.categoriesCard}>
          <img
            className={CategoriesCSS.categoriesCardImg}
            id={CategoriesCSS.headphonesImg}
            src={categoriesHeadphonesImg}
            alt=""
          />
          <div className={CategoriesCSS.categoriesCardTextContent}>
            <p className={CategoriesCSS.categoriesCardName}>Headphones</p>
            <button
              onClick={() => navigate("/headphones")}
              className={ButtonsCSS.categoriesCardButton}
            >
              shop
              <img src={linkArrow} alt="" />
            </button>
          </div>
        </div>
        <div className={CategoriesCSS.categoriesCard}>
          <img
            className={CategoriesCSS.categoriesCardImg}
            id={CategoriesCSS.speakersImg}
            src={categoriesSpeakersImg}
            alt=""
          />
          <div className={CategoriesCSS.categoriesCardTextContent}>
            <p className={CategoriesCSS.categoriesCardName}>Speakers</p>
            <button
              onClick={() => navigate("/speakers")}
              className={ButtonsCSS.categoriesCardButton}
            >
              shop
              <img src={linkArrow} alt="" />
            </button>
          </div>
        </div>
        <div className={CategoriesCSS.categoriesCard}>
          <img
            className={CategoriesCSS.categoriesCardImg}
            id={CategoriesCSS.earphonesImg}
            src={categoriesEarphonesImg}
            alt=""
          />
          <div className={CategoriesCSS.categoriesCardTextContent}>
            <p className={CategoriesCSS.categoriesCardName}>Earphones</p>
            <button
              onClick={() => navigate("/earphones")}
              className={ButtonsCSS.categoriesCardButton}
            >
              shop
              <img src={linkArrow} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
