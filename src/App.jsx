import Header from "./components/Header";
import Home from "./pages/Home";

import CategoryProductList from "./pages/CategoryProductList";
import ProductPage from "./pages/ProductPage";

import AppCSS from "./styles/app.module.css";
import { Route, Routes } from "react-router-dom";
import React from "react";

function App() {
  const [cartIsShown, setCartIsShown] = React.useState(false);

  function toggleCartIsShown() {
    setCartIsShown(!cartIsShown);
  }

  return (
    <div className={AppCSS.app}>
      {cartIsShown && (
        <div
          className={AppCSS.cartBackplate}
          onClick={() => {
            toggleCartIsShown();
          }}
        ></div>
      )}
      <Header
        cartIsShown={cartIsShown}
        toggleCartIsShown={toggleCartIsShown}
      ></Header>
      <div className={AppCSS.container}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
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
