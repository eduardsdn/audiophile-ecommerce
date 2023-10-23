import SpeakersCSS from "../styles/speakers.module.css";
import Categories from "../components/Categories";
import ProductPreview from "../components/ProductPreview";
import CompanyDescription from "../components/CompanyDescription";
import Footer from "../components/Footer";

import React from "react";
import { useLocation } from "react-router-dom";

export default function Speakers(props) {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className={SpeakersCSS.speakersHolder}>
      <div className={SpeakersCSS.pageTitle}>Speakers</div>
      <div className={SpeakersCSS.container}>
        {props.speakersProductsData[0].map(function (speakersProductPreview) {
          return (
            <ProductPreview
              productId={speakersProductPreview.productId}
              img={speakersProductPreview.img}
              title={speakersProductPreview.title}
              description={speakersProductPreview.description}
              isReverse={speakersProductPreview.isReverse}
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
