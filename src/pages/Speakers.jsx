import SpeakersCSS from "../styles/speakers.module.css";
import Categories from "../components/Categories";
import ProductPreview from "../components/ProductPreview";
import CompanyDescription from "../components/CompanyDescription";
import Footer from "../components/Footer";

import React from "react";
import { useLocation } from "react-router-dom";

import { useSelector } from "react-redux";

export default function Speakers() {
  const { pathname } = useLocation();

  const speakersProducts = useSelector((state) => state.speakersProducts);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className={SpeakersCSS.speakersHolder}>
      <div className={SpeakersCSS.pageTitle}>Speakers</div>
      <div className={SpeakersCSS.container}>
        {speakersProducts.map(function (speakersProduct) {
          return (
            <ProductPreview
              productId={speakersProduct.productId}
              img={speakersProduct.img}
              title={speakersProduct.title}
              description={speakersProduct.description}
              isReverse={speakersProduct.isReverse}
            />
          );
        })}
        <Categories mountedOn={"preview"} />
        <CompanyDescription />
      </div>
      <Footer />
    </div>
  );
}
