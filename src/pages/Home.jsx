import HomeCSS from "../styles/home.module.css";
import imageHero from "../assets/home/desktop/image-hero.jpg";
import Categories from "../components/Categories";

export default function Home() {
  return (
    <div className={HomeCSS.homeHolder}>
      {/* <div className={HomeCSS.homeHero}>
        <div className={HomeCSS.homeHeroTextContent}>
          <p className={HomeCSS.homeHeroNewProduct}>NEW PRODUCT</p>
          <h1 className={HomeCSS.homeHeroName}>XX99 Mark II Headphones</h1>
          <p className={HomeCSS.homeHeroDescription}>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <button>SEE PRODUCT</button>
        </div>
        <img src={imageHero} className={HomeCSS.heroImg} alt="" />
      </div> */}
      <Categories></Categories>
    </div>
  );
}
