import SummaryCSS from "../styles/summary.module.css";
import ButtonsCSS from "../styles/buttons.module.css";
import { useSelector } from "react-redux/es/hooks/useSelector";
import CartProductCard from "./CartProductCard";

export default function Summary({ form, onSubmit }) {
  const cart = useSelector((state) => state.cart);
  const shipping = 50;
  const total = getTotal();
  const vat = calculateVat();
  const grandTotal = calculateGrandTotal();

  const { handleSubmit } = form;
  // console.log(form);

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

  function calculateVat() {
    const vat = Math.round((total / 100) * 20);
    return vat;
  }

  function calculateGrandTotal() {
    const grandTotal = total + vat + shipping;
    return grandTotal;
  }

  return (
    <div className={SummaryCSS.summary}>
      <div className={SummaryCSS.top}>
        <h1 className={SummaryCSS.title}>Summary</h1>
      </div>
      <div className={SummaryCSS.cartProductCards}>
        {cart.products.map((product) => {
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
        <p className={SummaryCSS.totalValue}>$ {total}</p>
      </div>
      <div className={SummaryCSS.shipping}>
        <p className={SummaryCSS.shippingText}>SHIPPING</p>
        {/* VAT is calculated as 20% of the product total, excluding shipping */}
        <p className={SummaryCSS.shippingValue}>$ {shipping}</p>
      </div>
      <div className={SummaryCSS.vat}>
        <p className={SummaryCSS.vatText}>VAT (INCLUDED)</p>
        <p className={SummaryCSS.vatValue}>$ {vat}</p>
      </div>
      <div className={SummaryCSS.grandTotal}>
        <p className={SummaryCSS.grandTotalText}>GRAND TOTAL</p>
        <p className={SummaryCSS.grandTotalValue}>$ {grandTotal}</p>
      </div>
      <button
        className={`${ButtonsCSS.seeProductBtn} ${ButtonsCSS.checkoutBtn} ${SummaryCSS.continueBtn}`}
        id={ButtonsCSS.orange}
        onClick={handleSubmit(onSubmit)}
      >
        CONTINUE&PAY
      </button>
    </div>
  );
}
