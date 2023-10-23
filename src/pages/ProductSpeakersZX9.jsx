import productPageSharedCSS from "../styles/productPageShared.module.css";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import CompanyDescription from "../components/CompanyDescription";
import Suggestions from "../components/Suggestions";
import Product from "../components/Product";

import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function ProductSpeakersZX9(props) {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  // console.log(props);
  return (
    <div className={productPageSharedCSS.holder}>
      <div className={productPageSharedCSS.container}>
        <Product
          productImg={props.productData.img}
          title={props.productData.title}
          description={props.productData.description}
          price={props.productData.price}
          featuresText={props.productData.featuresText}
          inTheBox={props.productData.inTheBox}
          decorImages={props.productData.decorImages}
        />
        <Suggestions
          productsData={props.productsData}
          currentProduct={props.productData.title}
        />
        <Categories />
        <CompanyDescription />
      </div>
      <Footer />
    </div>
  );
}
