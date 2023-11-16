import CartDropdownCSS from "../styles/cartDropdown.module.css";
import ButtonsCSS from "../styles/buttons.module.css";
import CartProductCard from "./CartProductCard";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function CartDropdown() {
  const cart = useSelector((state) => state.cart);
  const products = useSelector((state) => state.products);

  let numberOfItemsInCart = countProducts(); // PUT INSIDE STATE???
  let productsInCart = getProductsInCart(); // PUT INSIDE STATE???

  function getProductsInCart() {
    let itemsInCart = [];
    cart.forEach((item) => {
      let filtProd = products.filter(
        //  filter out corresponding product object from products
        (product) => product.productId === item.productId
      )[0];
      filtProd = {
        //  add amount proprety which comes from cart state to it
        ...filtProd,
        amount: item.amount,
      };
      itemsInCart.push(filtProd); //  populate new array with this object iteratively
    });
    return itemsInCart;
  }

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

  console.log(cart);
  console.log(productsInCart);

  return (
    <div className={CartDropdownCSS.cartDropdown}>
      <div className={CartDropdownCSS.top}>
        <h1
          className={CartDropdownCSS.title}
        >{`CART (${numberOfItemsInCart})`}</h1>
        <button className={CartDropdownCSS.removeAllBtn}>Remove all</button>
        {/* Clear cart state on click here */}
      </div>
      <div className={CartDropdownCSS.cartProductCards}>
        {productsInCart.map((product) => {
          return (
            <CartProductCard
              productId={product.productId}
              img={product.img}
              title={product.title}
              price={product.price}
              amount={product.amount}
            />
          );
        })}
      </div>
      <div className={CartDropdownCSS.total}>
        <p className={CartDropdownCSS.totalText}>TOTAL</p>
        <p className={CartDropdownCSS.totalNumber}>$ 4327</p>
      </div>

      <button
        className={`${ButtonsCSS.seeProductBtn} ${CartDropdownCSS.checkoutBtn}`}
        id={ButtonsCSS.orange}
      >
        CHECKOUT
      </button>
    </div>
  );
}
