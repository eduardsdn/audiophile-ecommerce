import CategoriesCSS from "../styles/categories.module.css";
import categoriesHeadphonesImg from "../assets/shared/desktop/image-category-thumbnail-headphones.png";
import categoriesSpeakersImg from "../assets/shared/desktop/image-category-thumbnail-speakers.png";
import categoriesEarphonesImg from "../assets/shared/desktop/image-category-thumbnail-earphones.png";
import linkArrow from "../assets/shared/desktop/icon-arrow-right.svg";

export default function Categories() {
  return (
    <div className={CategoriesCSS.categories}>
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
            <div className={CategoriesCSS.categoriesCardShopLinkHolder}>
              <a href="/" className={CategoriesCSS.categoriesCardShopLink}>
                Shop
              </a>
              <img src={linkArrow} alt="" />
            </div>
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
            <div className={CategoriesCSS.categoriesCardShopLinkHolder}>
              <a href="/" className={CategoriesCSS.categoriesCardShopLink}>
                Shop
              </a>
              <img src={linkArrow} alt="" />
            </div>
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
            <div className={CategoriesCSS.categoriesCardShopLinkHolder}>
              <a href="/" className={CategoriesCSS.categoriesCardShopLink}>
                Shop
              </a>
              <img src={linkArrow} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
