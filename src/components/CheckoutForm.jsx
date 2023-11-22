import CheckoutFormCSS from "../styles/checkoutForm.module.css";
import { useState } from "react";

export default function CheckoutForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    zipCode: "",
    city: "",
    country: "",
    paymentMethod: "",
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

  console.log(formData);

  return (
    <div className={CheckoutFormCSS.checkoutFormHolder}>
      <h1 className={CheckoutFormCSS.title}>CHECKOUT</h1>
      <form className={CheckoutFormCSS.CheckoutForm}>
        <div className={CheckoutFormCSS.billingDetails}>
          <h2 className={CheckoutFormCSS.subTitle}>BILLING DETAILS</h2>
          <div className={CheckoutFormCSS.wrappedInputs}>
            <div className={CheckoutFormCSS.textInputHolder}>
              <label htmlFor="name">Name</label>
              <input
                onChange={handleChange}
                className={`${CheckoutFormCSS.textInput} ${CheckoutFormCSS.shortInput}`}
                type="text"
                name="name"
                value={formData.name}
                id="name"
                placeholder="Alexei Ward"
              />
            </div>
            <div className={CheckoutFormCSS.textInputHolder}>
              <label htmlFor="email">Email Address</label>
              <input
                onChange={handleChange}
                className={`${CheckoutFormCSS.textInput} ${CheckoutFormCSS.shortInput}`}
                type="email"
                name="email"
                value={formData.email}
                id="email"
                placeholder="alexei@mail.com"
              />
            </div>
            <div className={CheckoutFormCSS.textInputHolder}>
              <label htmlFor="phone">Phone Number</label>
              <input
                onChange={handleChange}
                className={`${CheckoutFormCSS.textInput} ${CheckoutFormCSS.shortInput}`}
                type="tel"
                name="phone"
                value={formData.phone}
                id="phone"
                placeholder="+1 202-555-0136"
              />
            </div>
          </div>
        </div>

        <div className={CheckoutFormCSS.shippingInfo}>
          <h2 className={CheckoutFormCSS.subTitle}>SHIPING INFO</h2>
          <div className={CheckoutFormCSS.textInputHolder}>
            <label htmlFor="address">Address</label>
            <input
              onChange={handleChange}
              className={CheckoutFormCSS.textInput}
              type="text"
              name="address"
              value={formData.address}
              id="address"
              placeholder="1137 Williams Avenue"
            />
          </div>
          <div
            className={`${CheckoutFormCSS.wrappedInputs} ${CheckoutFormCSS.shippingInfoWrappedInputs}`}
          >
            <div className={CheckoutFormCSS.textInputHolder}>
              <label htmlFor="zip">ZIP Code</label>
              <input
                onChange={handleChange}
                className={`${CheckoutFormCSS.textInput} ${CheckoutFormCSS.shortInput}`}
                type="number"
                name="zipCode"
                value={formData.zipCode}
                id="zip"
                placeholder="10001"
              />
            </div>
            <div className={CheckoutFormCSS.textInputHolder}>
              <label htmlFor="city">City</label>
              <input
                onChange={handleChange}
                className={`${CheckoutFormCSS.textInput} ${CheckoutFormCSS.shortInput}`}
                type="text"
                name="city"
                value={formData.city}
                id="email"
                placeholder="New York"
              />
            </div>
            <div className={CheckoutFormCSS.textInputHolder}>
              <label htmlFor="country">Country</label>
              <input
                onChange={handleChange}
                className={`${CheckoutFormCSS.textInput} ${CheckoutFormCSS.shortInput}`}
                type="phone"
                name="country"
                value={formData.country}
                id="country"
                placeholder="United States"
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
                  onChange={handleChange}
                  type="radio"
                  id="e-money"
                  name="paymentMethod"
                  value="e-Money"
                />
                <label className={CheckoutFormCSS.radioLabel} htmlFor="e-money">
                  e-Money
                </label>
              </div>
              <div className={CheckoutFormCSS.radioHolder}>
                <input
                  onChange={handleChange}
                  type="radio"
                  id="cash"
                  name="paymentMethod"
                  value="cash"
                />
                <label className={CheckoutFormCSS.radioLabel} htmlFor="cash">
                  Cash on Delivery
                </label>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
