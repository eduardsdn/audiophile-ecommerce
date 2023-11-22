import SummaryCSS from "../styles/summary.module.css";
import ButtonsCSS from "../styles/buttons.module.css";
import { useSelector } from "react-redux/es/hooks/useSelector";
import CartProductCard from "./CartProductCard";

export default function Summary() {
  const cart = useSelector((state) => state.cart);

  return (
    <div className={SummaryCSS.summary}>
      <div className={SummaryCSS.top}>
        <h1 className={SummaryCSS.title}>Summary</h1>
      </div>
      <div className={SummaryCSS.cartProductCards}>
        {cart.map((product) => {
          return (
            <CartProductCard
              productId={product.productId}
              img={product.productImg}
              title={product.title}
              price={product.price}
              amount={product.amount}
              isMountedOnSummary={true}
            />
          );
        })}
      </div>
      <div className={SummaryCSS.total}>
        <p className={SummaryCSS.totalText}>TOTAL</p>
        <p className={SummaryCSS.totalNumber}>$ 5692</p>
      </div>

      <button
        className={`${ButtonsCSS.seeProductBtn} ${ButtonsCSS.checkoutBtn} ${SummaryCSS.continueBtn}`}
        id={ButtonsCSS.orange}
      >
        CONTINUE&PAY
      </button>
    </div>
  );
}
