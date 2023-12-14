import CheckoutFormCSS from "../styles/checkoutForm.module.css";
import { useState } from "react";
// import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

export default function CheckoutForm({ form, onSubmit }) {
  // const form = useForm();
  const { register, control, handleSubmit } = form;

  // console.log("render");
  // console.log(form.getValues());

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    zipCode: "",
    city: "",
    country: "",
    paymentMethod: "",
    e_money_num: "",
    e_money_pin: "",
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  return (
    <div className={CheckoutFormCSS.checkoutFormHolder}>
      <h1 className={CheckoutFormCSS.title}>CHECKOUT</h1>
      <form
        className={CheckoutFormCSS.CheckoutForm}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className={CheckoutFormCSS.billingDetails}>
          <h2 className={CheckoutFormCSS.subTitle}>BILLING DETAILS</h2>
          <div className={CheckoutFormCSS.wrappedInputs}>
            <div className={CheckoutFormCSS.textInputHolder}>
              <label htmlFor="name">Name</label>
              <input
                // onChange={handleChange}
                className={`${CheckoutFormCSS.textInput} ${CheckoutFormCSS.shortInput}`}
                type="text"
                id="name"
                placeholder="Alexei Ward"
                {...register("name")}
              />
            </div>
            <div className={CheckoutFormCSS.textInputHolder}>
              <label htmlFor="email">Email Address</label>
              <input
                className={`${CheckoutFormCSS.textInput} ${CheckoutFormCSS.shortInput}`}
                type="email"
                id="email"
                placeholder="alexei@mail.com"
                {...register("email")}
              />
            </div>
            <div className={CheckoutFormCSS.textInputHolder}>
              <label htmlFor="phone">Phone Number</label>
              <input
                className={`${CheckoutFormCSS.textInput} ${CheckoutFormCSS.shortInput}`}
                type="tel"
                id="phone"
                placeholder="+1 202-555-0136"
                {...register("phone")}
              />
            </div>
          </div>
        </div>

        <div className={CheckoutFormCSS.shippingInfo}>
          <h2 className={CheckoutFormCSS.subTitle}>SHIPING INFO</h2>
          <div className={CheckoutFormCSS.textInputHolder}>
            <label htmlFor="address">Address</label>
            <input
              className={CheckoutFormCSS.textInput}
              type="text"
              id="address"
              placeholder="1137 Williams Avenue"
              {...register("address")}
            />
          </div>
          <div
            className={`${CheckoutFormCSS.wrappedInputs} ${CheckoutFormCSS.shippingInfoWrappedInputs}`}
          >
            <div className={CheckoutFormCSS.textInputHolder}>
              <label htmlFor="zip">ZIP Code</label>
              <input
                className={`${CheckoutFormCSS.textInput} ${CheckoutFormCSS.shortInput}`}
                type="number"
                id="zip"
                placeholder="10001"
                {...register("zip")}
              />
            </div>
            <div className={CheckoutFormCSS.textInputHolder}>
              <label htmlFor="city">City</label>
              <input
                className={`${CheckoutFormCSS.textInput} ${CheckoutFormCSS.shortInput}`}
                type="text"
                id="email"
                placeholder="New York"
                {...register("city")}
              />
            </div>
            <div className={CheckoutFormCSS.textInputHolder}>
              <label htmlFor="country">Country</label>
              <input
                className={`${CheckoutFormCSS.textInput} ${CheckoutFormCSS.shortInput}`}
                type="text"
                id="country"
                placeholder="United States"
                {...register("country")}
              />
            </div>
          </div>
        </div>

        <div className={CheckoutFormCSS.paymentDetails}>
          <div className={CheckoutFormCSS.subTitle}>PAYMENT DETAILS</div>
          <div className={CheckoutFormCSS.paymentMethodHolder}>
            <label htmlFor="payment_method">Payment method</label>
            <div className={CheckoutFormCSS.paymentMethodInputs}>
              <div className={CheckoutFormCSS.radioHolder}>
                <input
                  type="radio"
                  id="e-money"
                  value={"e-money"}
                  name="paymentMethod"
                  {...register("paymentMethod")}
                />
                <label className={CheckoutFormCSS.radioLabel} htmlFor="e-money">
                  e-Money
                </label>
              </div>
              <div className={CheckoutFormCSS.radioHolder}>
                <input
                  type="radio"
                  id="cash"
                  value={"cash"}
                  name="paymentMethod"
                  {...register("paymentMethod")}
                />
                <label className={CheckoutFormCSS.radioLabel} htmlFor="cash">
                  Cash on Delivery
                </label>
              </div>
            </div>
          </div>
          {formData.paymentMethod === "e-money" ? (
            <div className={CheckoutFormCSS.eMoneyDetails}>
              <div className={CheckoutFormCSS.textInputHolder}>
                <label htmlFor="e_money_num">e-Money Number</label>
                <input
                  onChange={handleChange}
                  className={`${CheckoutFormCSS.textInput} ${CheckoutFormCSS.shortInput}`}
                  type="num"
                  name="e_money_num"
                  value={formData.e_money_num}
                  id="e_money_num"
                  placeholder="238521993"
                />
              </div>
              <div className={CheckoutFormCSS.textInputHolder}>
                <label htmlFor="e_money_pin">e-Money PIN</label>
                <input
                  onChange={handleChange}
                  className={`${CheckoutFormCSS.textInput} ${CheckoutFormCSS.shortInput}`}
                  type="number"
                  name="e_money_pin"
                  value={formData.e_money_pin}
                  id="e_money_pin"
                  placeholder="6891"
                />
              </div>
            </div>
          ) : null}
        </div>
        <button>asdfasdf</button>
      </form>
      <DevTool control={control} />
    </div>
  );
}
