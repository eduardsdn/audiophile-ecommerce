import headphonesCSS from "../styles/headphones.module.css";
import Categories from "../components/Categories";
import ProductPreview from "../components/ProductPreview";
import CompanyDescription from "../components/CompanyDescription";
import Footer from "../components/Footer";

import React from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Headphones() {
  const { pathname } = useLocation();

  const headphonesProducts = useSelector((state) => state.headphonesProducts);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  console.log(headphonesProducts);

  return (
    <div className={headphonesCSS.headphonesHolder}>
      <div className={headphonesCSS.pageTitle}>Headphones</div>
      <div className={headphonesCSS.container}>
        {headphonesProducts.map(function (headphonesProduct) {
          return (
            <ProductPreview
              productId={headphonesProduct.productId}
              img={headphonesProduct.img}
              title={headphonesProduct.title}
              description={headphonesProduct.description}
              isReverse={headphonesProduct.isReverse}
            />
          );
        })}
        <Categories mountedOn={"preview"}></Categories>
        <CompanyDescription></CompanyDescription>
      </div>
      <Footer></Footer>
    </div>
  );
}
