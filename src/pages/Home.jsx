import HomeCSS from "../styles/home.module.css";
import ButtonsCSS from "../styles/buttons.module.css";
import imageSpeakerZX9 from "../assets/home/desktop/image-speaker-zx9.png";
import imageEarphonesYX1 from "../assets/home/desktop/image-earphones-yx1.jpg";
import patterCircles from "../assets/home/desktop/pattern-circles.svg";
import Categories from "../components/Categories";
import CompanyDescription from "../components/CompanyDescription";
import Footer from "../components/Footer";

import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <div className={HomeCSS.homeHeroHolder}>
        <div className={HomeCSS.homeHero}>
          <div className={HomeCSS.homeHeroTextContent}>
            <p className={HomeCSS.homeHeroNewProduct}>NEW PRODUCT</p>
            <h1 className={HomeCSS.homeHeroName}>XX99 Mark II Headphones</h1>
            <p className={HomeCSS.homeHeroDescription}>
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <button
              className={`${ButtonsCSS.seeProductBtn} ${HomeCSS.homeHeroBtn}`}
              id={ButtonsCSS.orange}
              onClick={() => {
                navigate(`/products/xx992`);
              }}
            >
              see product
            </button>
          </div>
        </div>
      </div>
      <Categories />
      <div className={HomeCSS.homeProducts}>
        <div className={HomeCSS.homeProductsTop}>
          <img
            className={HomeCSS.homeProductsTopImg}
            src={imageSpeakerZX9}
            alt=""
          />
          <img
            className={HomeCSS.homeProductsTopDecor}
            src={patterCircles}
            alt=""
          />
          <div className={HomeCSS.homeProductsTopContent}>
            <h1 className={HomeCSS.homeProductsContentTopTitle}>ZX9 SPEAKER</h1>
            <p className={HomeCSS.homeProductsContentTopDescription}>
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <button
              className={`${ButtonsCSS.seeProductBtn} ${HomeCSS.homeProductsTopContentBtn}`}
              id={ButtonsCSS.black}
              onClick={() => {
                navigate(`/products/zx9`);
              }}
            >
              See product
            </button>
          </div>
        </div>
        <div className={HomeCSS.homeProductsMiddle}>
          <div className={HomeCSS.homeProductsMiddleContent}>
            <h1 className={HomeCSS.homeProductsContentTitle}>ZX7 SPEAKER</h1>
            <button
              className={`${ButtonsCSS.seeProductBtn} ${HomeCSS.homeProductsBtn}`}
              id={ButtonsCSS.black}
              onClick={() => {
                navigate(`/products/zx7`);
              }}
            >
              see product
            </button>
          </div>
        </div>
        <div className={HomeCSS.homeProductsBottom}>
          <img
            className={HomeCSS.homeProductsBottomImg}
            src={imageEarphonesYX1}
            alt=""
          />
          <div className={HomeCSS.homeProductsBottomContent}>
            <h1 className={HomeCSS.homeProductsContentTitle}>YX1 EARPHONES</h1>
            <button
              className={`${ButtonsCSS.seeProductBtn} ${HomeCSS.homeProductsBtn}`}
              id={ButtonsCSS.black}
              onClick={() => {
                navigate(`/products/yx1`);
              }}
            >
              see product
            </button>
          </div>
        </div>
      </div>
      <CompanyDescription></CompanyDescription>
    </div>
  );
}
