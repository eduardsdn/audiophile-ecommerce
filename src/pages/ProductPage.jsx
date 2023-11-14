import Categories from "../components/Categories";
import Footer from "../components/Footer";
import CompanyDescription from "../components/CompanyDescription";
import Suggestions from "../components/Suggestions";
import Product from "../components/Product";

import React from "react";
import { useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";

export default function ProductPage() {
  const { productId } = useParams();
  const { pathname } = useLocation();

  const products = useSelector((state) => state.products);

  const product = useSelector((state) =>
    state.products.find((product) => product.productId === productId)
  );

  console.log(product);
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
        productImg={product.img}
        title={product.title}
        description={product.description}
        price={product.price}
        featuresText={product.featuresText}
        inTheBox={product.inTheBox}
        decorImages={product.decorImages}
      />
      <Suggestions productsData={products} currentProduct={product.productId} />
      <Categories />
      <CompanyDescription />
      <Footer />
    </div>
  );
}
