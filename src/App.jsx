import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";

import CategoryProductList from "./pages/CategoryProductList";
import ProductPage from "./pages/ProductPage";
import Checkout from "./pages/Checkout";

import AppCSS from "./styles/app.module.css";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import React, { useEffect } from "react";

function App() {
  const [cartIsShown, setCartIsShown] = React.useState(false);
  const [menuIsShown, setMenuIsShown] = React.useState(false);
  const dispatch = useDispatch();

  function toggleCartIsShown() {
    setCartIsShown(!cartIsShown);
  }

  function toggleMenuIsShown() {
    setMenuIsShown(!menuIsShown);
  }

  return (
    <div className={AppCSS.app}>
      {(cartIsShown || menuIsShown) && (
        <div
          className={AppCSS.dimmedBackplate}
          onClick={() => {
            if (cartIsShown) {
              toggleCartIsShown();
            } else if (menuIsShown) {
              toggleMenuIsShown();
            }
          }}
        ></div>
      )}
      <Header
        cartIsShown={cartIsShown}
        menuIsShown={menuIsShown}
        toggleCartIsShown={toggleCartIsShown}
        toggleMenuIsShown={toggleMenuIsShown}
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
          <Route path="/checkout" element={<Checkout />}></Route>
        </Routes>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
