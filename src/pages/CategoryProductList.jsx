import Categories from "../components/Categories";
import CategotyPageTitle from "../components/CategoryPageTitle";
import ProductPreview from "../components/ProductPreview";
import ProductPreviewCSS from "../styles/productPreview.module.css";
import CompanyDescription from "../components/CompanyDescription";

import React from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function CategoryProductList(props) {
  const { pathname } = useLocation();

  let renderFor = "";
  let categoryTitle = "";
  if (props.category === "headphones") {
    renderFor = "headphonesProducts";
    categoryTitle = "Headphones";
  } else if (props.category === "speakers") {
    renderFor = "speakersProducts";
    categoryTitle = "Speakers";
  } else if (props.category === "earphones") {
    renderFor = "earphonesProducts";
    categoryTitle = "Earphones";
  }

  const products = useSelector((state) => state[renderFor]);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      <CategotyPageTitle categoryTitle={categoryTitle} />
      <div className={ProductPreviewCSS.previewsHolder}>
        {products.map(function (product) {
          return (
            <ProductPreview
              key={product.productId} // Is the key correct?
              productId={product.productId}
              imgDesktop={product.imgDesktop}
              imgTablet={product.imgTablet}
              title={product.title}
              description={product.description}
              isReverse={product.isReverse}
            />
          );
        })}
      </div>
      <div className={ProductPreviewCSS.CategoriesHolder}>
        <Categories mountedOn={"preview"}></Categories>
      </div>
      <CompanyDescription></CompanyDescription>
    </div>
  );
}
