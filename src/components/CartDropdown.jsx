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
  const state = useSelector((state) => state.cart);
  console.log(state);
  console.log(cart);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // function countProducts() {
  //   let productsAmounts = cart.products.map(
  //     ({ productId, price, ...amount }) => amount
  //   );
  //   const initialValue = 0;
  //   const numberOfProducts = productsAmounts.reduce(
  //     //sum array of amounts
  //     (accumulator, currentValue) => accumulator + currentValue.amount,
  //     initialValue
  //   );
  //   return numberOfProducts; // return number of products
  // }

  function getTotal() {
    let total = 0; // if there are NO products in the cart set total to 0
    if (cart.products.length !== 0) {
      // if there ARE products in the cart calculate total
      let productsTotals = cart.products.map(
        (product) => product.amount * product.price // get total for every individual product type in the cart
      );
      total = productsTotals.reduce(
        (accumulator, currentValue) => accumulator + currentValue // sum all of individual totals
      );
    }
    return total;
  }

  // let numberOfItemsInCart = countProducts();
  let total = getTotal();

  return (
    <div className={CartDropdownCSS.cartDropdown}>
      <div className={CartDropdownCSS.top}>
        <h1
          className={CartDropdownCSS.title}
        >{`CART (${cart.numberOfItems})`}</h1>
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
        {cart.products.map((product) => {
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
          console.log(cart.numberOfItems);
          if (cart.numberOfItems > 0) {
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
