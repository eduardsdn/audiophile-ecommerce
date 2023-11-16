import cartProductCardCSS from "../styles/cartProductCard.module.css";
import ButtonsCSS from "../styles/buttons.module.css";

import { useDispatch, useSelector } from "react-redux";
import {
  addProductInsideCart,
  removeProductInsideCart,
} from "../state/cartSlice";

export default function CartProductCard(props) {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className={cartProductCardCSS.cartProductCard}>
      <div className={cartProductCardCSS.content}>
        <img src={props.img} className={cartProductCardCSS.image} alt="" />
        <div className={cartProductCardCSS.textContent}>
          <h1 className={cartProductCardCSS.title}>{props.title}</h1>
          <p className={cartProductCardCSS.price}>$ {props.price}</p>
        </div>
      </div>

      <div className={ButtonsCSS.cartInputStepper}>
        <button
          className={ButtonsCSS.cartDecrement}
          onClick={() => {
            dispatch(
              removeProductInsideCart({
                productId: props.productId,
                amount: props.amount,
              })
            );
          }}
        >
          {" "}
          -{" "}
        </button>
        <input
          className={ButtonsCSS.cartInputStepperValue}
          type="number"
          min="1"
          max="100"
          value={props.amount}
          readOnly={true}
        />
        <button
          className={ButtonsCSS.cartIncrement}
          onClick={() => {
            dispatch(
              addProductInsideCart({
                productId: props.productId,
              })
            );
            console.log(cart);
          }}
        >
          {" "}
          +{" "}
        </button>
      </div>
    </div>
  );
}
