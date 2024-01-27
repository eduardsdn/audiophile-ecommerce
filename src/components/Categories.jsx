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
    <div className={CategoriesCSS.categoriesCards}>
      <div
        className={`${CategoriesCSS.categoriesCard} ${
          props.isMenuMobile ? CategoriesCSS.categoriesCardMenu : null
        }`}
      >
        <div className={CategoriesCSS.categoriesCardTextContent}>
          <p className={CategoriesCSS.categoriesCardName}>Headphones</p>
          <button
            onClick={() => {
              navigate("/headphones");
              props.toggleMenuIsShown();
            }}
            className={ButtonsCSS.categoriesCardButton}
          >
            shop
            <img src={linkArrow} alt="" />
          </button>
        </div>
        <img
          className={CategoriesCSS.categoriesCardImg}
          id={
            props.isMenuMobile
              ? CategoriesCSS.headphonesImgMenu
              : CategoriesCSS.headphonesImg
          }
          src={categoriesHeadphonesImg}
          alt=""
        />
      </div>
      <div
        className={`${CategoriesCSS.categoriesCard} ${
          props.isMenuMobile ? CategoriesCSS.categoriesCardMenu : null
        }`}
      >
        {/* <div className={CategoriesCSS.categiriesCardImgHolder}> */}

        {/* </div> */}
        <div
          className={`${CategoriesCSS.categoriesCardTextContent} ${
            props.isMenuMobile ? CategoriesCSS.categoriesTextContentMenu : null
          }`}
        >
          <p className={CategoriesCSS.categoriesCardName}>Speakers</p>
          <button
            onClick={() => {
              navigate("/speakers");
              props.toggleMenuIsShown();
            }}
            className={ButtonsCSS.categoriesCardButton}
          >
            shop
            <img src={linkArrow} alt="" />
          </button>
        </div>
        <img
          className={CategoriesCSS.categoriesCardImg}
          id={
            props.isMenuMobile
              ? CategoriesCSS.speakersImgMenu
              : CategoriesCSS.speakersImg
          }
          src={categoriesSpeakersImg}
          alt=""
        />
      </div>
      <div
        className={`${CategoriesCSS.categoriesCard} ${
          props.isMenuMobile ? CategoriesCSS.categoriesCardMenu : null
        }`}
      >
        {/* <div className={CategoriesCSS.categiriesCardImgHolder}> */}
        {/* </div> */}
        <div className={CategoriesCSS.categoriesCardTextContent}>
          <p className={CategoriesCSS.categoriesCardName}>Earphones</p>
          <button
            onClick={() => {
              navigate("/earphones");
              props.toggleMenuIsShown();
            }}
            className={ButtonsCSS.categoriesCardButton}
          >
            shop
            <img src={linkArrow} alt="" />
          </button>
        </div>
        <img
          className={CategoriesCSS.categoriesCardImg}
          id={
            props.isMenuMobile
              ? CategoriesCSS.earphonesImgMenu
              : CategoriesCSS.earphonesImg
          }
          src={categoriesEarphonesImg}
          alt=""
        />
      </div>
    </div>
  );
}
