import productPageSharedCSS from "../styles/productPageShared.module.css";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import CompanyDescription from "../components/CompanyDescription";
import Suggestions from "../components/Suggestions";
import Product from "../components/Product";

import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function ProductHeadphonesXX992(props) {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  // console.log(props);
  return (
    <div className={productPageSharedCSS.holder}>
      <div className={productPageSharedCSS.container}>
        <Product
          productImg={props.x992ProductData[0].img}
          title={props.x992ProductData[0].title}
          description={props.x992ProductData[0].description}
          price={props.x992ProductData[0].price}
          featuresText={props.x992ProductData[0].featuresText}
          inTheBox={props.x992ProductData[0].inTheBox}
          decorImages={props.x992ProductData[0].decorImages}
        />
        <Suggestions
          productsData={props.productsData}
          currentProduct={props.x992ProductData[0].title}
        />
        <Categories />
        <CompanyDescription />
      </div>
      <Footer />
    </div>
  );
}
