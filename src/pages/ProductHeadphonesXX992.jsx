import xx992CSS from "../styles/productXX992.module.css";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import CompanyDescription from "../components/CompanyDescription";
import Product from "../components/Product";

import React from "react";

export default function ProductHeadphonesXX992(props) {
  return (
    <div className={xx992CSS.xx992Holder}>
      <div className={xx992CSS.container}>
        <Product />
        <Categories />
        <CompanyDescription />
      </div>
      <Footer />
    </div>
  );
}
