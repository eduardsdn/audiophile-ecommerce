import Categories from "../components/Categories";
import CompanyDescription from "../components/CompanyDescription";
import Product from "../components/Product";
import ProductCSS from "../styles/product.module.css";

import React from "react";
import { useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";

export default function ProductPage() {
  const { productId } = useParams();
  const { pathname } = useLocation();

  const product = useSelector((state) =>
    state.products.find((product) => product.productId === productId)
  );

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  if (!product) {
    return <h1>No product found</h1>;
  }

  return (
    <div>
      <Product
        productId={product.productId}
        productImgDesktop={product.img}
        productImgTablet={product.imgTablet}
        title={product.title}
        description={product.description}
        price={product.price}
        featuresText={product.featuresText}
        inTheBox={product.inTheBox}
        decorImages={product.decorImages}
      />
      <div className={ProductCSS.categoriesHolder}>
        <Categories />
      </div>
      <CompanyDescription />
    </div>
  );
}
