import CheckoutForm from "../components/CheckoutForm";
import Summary from "../components/Summary";
import CheckoutCSS from "../styles/checkout.module.css";

export default function Checkout() {
  return (
    <div className={CheckoutCSS.checkout}>
      <CheckoutForm></CheckoutForm>
      <Summary></Summary>
    </div>
  );
}
