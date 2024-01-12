import CartDropdownCSS from "../styles/cartDropdown.module.css";
import ButtonsCSS from "../styles/buttons.module.css";
import CartProductCard from "./CartProductCard";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeAllProducts } from "../state/cartSlice";

export default function CartDropdown(props) {
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
        <p className={CartDropdownCSS.totalNumber}>$ {cart.total}</p>
      </div>
      <button
        className={`${ButtonsCSS.seeProductBtn} ${CartDropdownCSS.checkoutBtn}`}
        id={ButtonsCSS.orange}
        onClick={() => {
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
