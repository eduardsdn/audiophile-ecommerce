import Header from "./components/Header";
import Home from "./pages/Home";
// import Headphones from "./pages/Headphones";
// import Speakers from "./pages/Speakers";
// import Earphones from "./pages/Earphones";
import CategoryProductList from "./pages/CategoryProductList";
import ProductPage from "./pages/ProductPage";

import AppCSS from "./styles/app.module.css";
import { Route, Routes } from "react-router-dom";
import React from "react";

function App() {
  return (
    <div className={AppCSS.app}>
      <Header></Header>
      <div className={AppCSS.container}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          {/* <Route path="/headphones" element={<Headphones />}></Route>
          <Route path="/speakers" element={<Speakers />}></Route>
          <Route path="/earphones" element={<Earphones />}></Route> */}
          <Route
            path="/headphones"
            element={<CategoryProductList category="headphones" />}
          ></Route>
          <Route
            path="/speakers"
            element={<CategoryProductList category="speakers" />}
          ></Route>
          <Route
            path="/earphones"
            element={<CategoryProductList category="earphones" />}
          ></Route>
          <Route
            exact
            path="products/:productId"
            element={<ProductPage />}
          ></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
