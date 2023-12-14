import CheckoutForm from "../components/CheckoutForm";
import Summary from "../components/Summary";
import CheckoutCSS from "../styles/checkout.module.css";
import { useForm } from "react-hook-form";

export default function Checkout() {
  const form = useForm();

  function onSubmit(data) {
    console.log("Form submitted");
    // console.log(data)
    console.log(form.getValues().paymentMethod);
  }

  return (
    <div className={CheckoutCSS.checkout}>
      <CheckoutForm form={form}></CheckoutForm>
      <Summary form={form} onSubmit={onSubmit}></Summary>
    </div>
  );
}

// form object declared here in the parent component and passed as prop to children so it is possible to manage form state from CheckOut form and submit the form seperately in Summary.
// Summary also recieves onSubmit function so submitted form data can be accessed here in Checkout.
