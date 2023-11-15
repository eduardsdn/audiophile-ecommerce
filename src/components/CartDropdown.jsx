import CartDropdownCSS from "../styles/cartDropdown.module.css";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function CartDropdown() {
  const cart = useSelector((state) => state.cart);
  console.log(cart);

  function countProducts() {
    let productsAmounts = cart.map(({ productId, price, ...amount }) => amount); // get array of amounts
    console.log(productsAmounts);

    const initialValue = 0;
    const numberOfProducts = productsAmounts.reduce(
      //sum array of amounts
      (accumulator, currentValue) => accumulator + currentValue.amount,
      initialValue
    );
    return numberOfProducts; // return number of products
  }

  // countProducts();
  const [numberOfItemsInCart, setNumberOfItemsInCart] = useState(countProducts); //set state by calling countProducts (good idea???)
  // DOES NOT UPDATE INSTANTLY WHEN ADDING NEW PRODUCT !!!
  console.log(numberOfItemsInCart);

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
        {cart.map((product) => {
          return (
            <div>
              {product.productId}, {product.amount}
            </div>
          );
        })}
      </div>
    </div>
  );
}
