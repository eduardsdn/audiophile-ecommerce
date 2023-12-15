import CheckoutFormCSS from "../styles/checkoutForm.module.css";
import { useState } from "react";
import { DevTool } from "@hookform/devtools";

export default function CheckoutForm({ form, onSubmit }) {
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;

  const watchPaymentMethod = form.watch(["paymentMethod"]);

  return (
    <div className={CheckoutFormCSS.checkoutFormHolder}>
      <h1 className={CheckoutFormCSS.title}>CHECKOUT</h1>
      <form
        className={CheckoutFormCSS.CheckoutForm}
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <div className={CheckoutFormCSS.billingDetails}>
          <h2 className={CheckoutFormCSS.subTitle}>BILLING DETAILS</h2>
          <div className={CheckoutFormCSS.wrappedInputs}>
            <div className={CheckoutFormCSS.textInputHolder}>
              <label htmlFor="name">Name</label>
              <input
                className={`${CheckoutFormCSS.textInput} ${CheckoutFormCSS.shortInput}`}
                type="text"
                id="name"
                placeholder="Alexei Ward"
                {...register("name", {
                  required: { value: true, message: "Name is required" },
                })}
              />
              <p className={CheckoutFormCSS.errorMessage}>
                {errors.name?.message}
              </p>
            </div>

            <div className={CheckoutFormCSS.textInputHolder}>
              <label htmlFor="email">Email Address</label>
              <input
                className={`${CheckoutFormCSS.textInput} ${CheckoutFormCSS.shortInput}`}
                type="email"
                id="email"
                placeholder="alexei@mail.com"
                {...register("email", {
                  pattern: {
                    value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                    messsage: "Invalid email format",
                  },
                  required: {
                    value: true,
                    message: "Email is required",
                  },
                })}
              />
              <p className={CheckoutFormCSS.errorMessage}>
                {errors.email?.message}
              </p>
            </div>
            <div className={CheckoutFormCSS.textInputHolder}>
              <label htmlFor="phone">Phone Number</label>
              <input
                className={`${CheckoutFormCSS.textInput} ${CheckoutFormCSS.shortInput}`}
                type="tel"
                id="phone"
                placeholder="+1 202-555-0136"
                {...register("phone", {
                  required: {
                    value: true,
                    message: "Phone number is required",
                  },
                })}
              />
              <p className={CheckoutFormCSS.errorMessage}>
                {errors.phone?.message}
              </p>
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
              {...register("address", {
                required: {
                  value: true,
                  message: "Address is required",
                },
              })}
            />
            <p className={CheckoutFormCSS.errorMessage}>
              {errors.address?.message}
            </p>
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
                placeholder="10231"
                {...register("zip", {
                  required: { value: true, message: "ZIP code is required" },
                })}
              />
              <p className={CheckoutFormCSS.errorMessage}>
                {errors.zip?.message}
              </p>
            </div>
            <div className={CheckoutFormCSS.textInputHolder}>
              <label htmlFor="city">City</label>
              <input
                className={`${CheckoutFormCSS.textInput} ${CheckoutFormCSS.shortInput}`}
                type="text"
                id="city"
                placeholder="New York"
                {...register("city", {
                  required: {
                    value: true,
                    message: "City is required",
                  },
                })}
              />
              <p className={CheckoutFormCSS.errorMessage}>
                {errors.city?.message}
              </p>
            </div>
            <div className={CheckoutFormCSS.textInputHolder}>
              <label htmlFor="country">Country</label>
              <input
                className={`${CheckoutFormCSS.textInput} ${CheckoutFormCSS.shortInput}`}
                type="text"
                id="country"
                placeholder="United States"
                {...register("country", {
                  required: {
                    value: true,
                    message: "Country is required",
                  },
                })}
              />
              <p className={CheckoutFormCSS.errorMessage}>
                {errors.country?.message}
              </p>
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
            <p className={CheckoutFormCSS.errorMessage}>
              {errors.paymentMethod?.message}
            </p>
          </div>
          {form.getValues().paymentMethod === "e-money" ? (
            <div className={CheckoutFormCSS.eMoneyDetails}>
              <div className={CheckoutFormCSS.textInputHolder}>
                <label htmlFor="e_money_num">e-Money Number</label>
                <input
                  className={`${CheckoutFormCSS.textInput} ${CheckoutFormCSS.shortInput}`}
                  type="num"
                  name="eMoneyNum"
                  id="eMoneyNum"
                  placeholder="238521993"
                  {...register("eMoneyNum", {
                    required: {
                      value: true,
                      message: "e-Money number is required",
                    },
                  })}
                />
                <p className={CheckoutFormCSS.errorMessage}>
                  {errors.eMoneyNum?.message}
                </p>
              </div>
              <div className={CheckoutFormCSS.textInputHolder}>
                <label htmlFor="e_money_pin">e-Money PIN</label>
                <input
                  className={`${CheckoutFormCSS.textInput} ${CheckoutFormCSS.shortInput}`}
                  type="number"
                  name="eMoneyPin"
                  id="eMoneyPin"
                  placeholder="6891"
                  {...register("eMoneyPin", {
                    required: { value: true, message: "PIN is required" },
                  })}
                />
                <p className={CheckoutFormCSS.errorMessage}>
                  {errors.eMoneyPin?.message}
                </p>
              </div>
            </div>
          ) : null}
        </div>
      </form>
      <DevTool control={control} />
    </div>
  );
}
