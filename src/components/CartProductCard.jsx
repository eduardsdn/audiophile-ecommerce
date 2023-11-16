import cartProductCardCSS from "../styles/cartProductCard.module.css";
import ButtonsCSS from "../styles/buttons.module.css";

export default function CartProductCard(props) {
  return (
    <div className={cartProductCardCSS.cartProductCard}>
      <div className={cartProductCardCSS.content}>
        <img src={props.img} className={cartProductCardCSS.image} alt="" />
        <div className={cartProductCardCSS.textContent}>
          <h1 className={cartProductCardCSS.title}>{props.title}</h1>
          <p className={cartProductCardCSS.price}>$ {props.price}</p>
        </div>
      </div>

      <div className={ButtonsCSS.inputStepper}>
        <button
          id={ButtonsCSS.decrement}
          // onClick={() => {
          //   if (productAmount > 1) {
          //     setProductAmount(function (prevProductAamount) {
          //       return prevProductAamount - 1;
          //     });
          //   }
          // }}
        >
          {" "}
          -{" "}
        </button>
        <input
          className={ButtonsCSS.inputStepperValue}
          type="number"
          min="1"
          max="100"
          value={props.amount}
          readOnly={true}
        />
        <button
          id={ButtonsCSS.increment}
          // onClick={() => {
          //   setProductAmount(function (prevProductAamount) {
          //     return prevProductAamount + 1;
          //   });
          // }}
        >
          {" "}
          +{" "}
        </button>
      </div>
    </div>
  );
}
