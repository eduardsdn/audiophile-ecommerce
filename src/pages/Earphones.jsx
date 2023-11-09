import EarphonesCSS from "../styles/earphones.module.css";
import Categories from "../components/Categories";
import ProductPreview from "../components/ProductPreview";
import CompanyDescription from "../components/CompanyDescription";
import Footer from "../components/Footer";

import React from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Earphones(props) {
  const { pathname } = useLocation();

  const earphonesProducts = useSelector((state) => state.earphonesProducts);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className={EarphonesCSS.earphonesHolder}>
      <div className={EarphonesCSS.pageTitle}>Earphones</div>
      <div className={EarphonesCSS.container}>
        {earphonesProducts.map(function (earphonesProduct) {
          return (
            <ProductPreview
              productId={earphonesProduct.productId}
              img={earphonesProduct.img}
              title={earphonesProduct.title}
              description={earphonesProduct.description}
              isReverse={earphonesProduct.isReverse}
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
