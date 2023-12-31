import CartDropdownCSS from "../styles/cartDropdown.module.css";
import ButtonsCSS from "../styles/buttons.module.css";
import CartProductCard from "./CartProductCard";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { removeAllProducts } from "../state/cartSlice";

export default function CartDropdown(props) {
  const cart = useSelector((state) => state.cart);
  // const products = useSelector((state) => state.products);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  let numberOfItemsInCart = countProducts(); // PUT INSIDE STATE???
  let total = getTotal();

  function countProducts() {
    let productsAmounts = cart.map(({ productId, price, ...amount }) => amount); // get array of amounts
    const initialValue = 0;
    const numberOfProducts = productsAmounts.reduce(
      //sum array of amounts
      (accumulator, currentValue) => accumulator + currentValue.amount,
      initialValue
    );
    return numberOfProducts; // return number of products
  }

  function getTotal() {
    let total = 0; // if there are NO products in the cart set total to 0
    if (cart.length !== 0) {
      // if there ARE products in the cart calculate total
      let productsTotals = cart.map(
        (product) => product.amount * product.price // get total for every individual product type in the cart
      );
      total = productsTotals.reduce(
        (accumulator, currentValue) => accumulator + currentValue // sum all of individual totals
      );
    }
    return total;
  }

  console.log(cart);

  return (
    <div className={CartDropdownCSS.cartDropdown}>
      <div className={CartDropdownCSS.top}>
        <h1
          className={CartDropdownCSS.title}
        >{`CART (${numberOfItemsInCart})`}</h1>
        <button
          className={CartDropdownCSS.removeAllBtn}
          onClick={() => {
            dispatch(removeAllProducts());
          }}
        >
          Remove all
        </button>
      </div>
      <div className={CartDropdownCSS.cartProductCards}>
        {cart.map((product) => {
          return (
            <CartProductCard
              productId={product.productId}
              img={product.productImg}
              title={product.title}
              price={product.price}
              amount={product.amount}
            />
          );
        })}
      </div>
      <div className={CartDropdownCSS.total}>
        <p className={CartDropdownCSS.totalText}>TOTAL</p>
        <p className={CartDropdownCSS.totalNumber}>$ {total}</p>
      </div>

      <button
        className={`${ButtonsCSS.seeProductBtn} ${CartDropdownCSS.checkoutBtn}`}
        id={ButtonsCSS.orange}
        onClick={() => {
          if (cart.length > 0) {
            // If cart has products checkout is available
            props.toggleCartIsShown();
            navigate("/checkout");
          }
        }}
      >
        CHECKOUT
      </button>
    </div>
  );
}
