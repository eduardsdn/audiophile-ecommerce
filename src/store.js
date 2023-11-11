import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./state/productsSlice";
import headphonesProductsReducer from "./state/headphonesProductsSlice";
import speakersProductsSlice from "./state/speakersProductsSlice";
import earphonesProductsSlice from "./state/earphonesProductsSlice";
import cartSlice from "./state/cartSlice";

export default configureStore({
  reducer: {
    cart: cartSlice,
    products: productsSlice,
    headphonesProducts: headphonesProductsReducer,
    speakersProducts: speakersProductsSlice,
    earphonesProducts: earphonesProductsSlice,
  },
});
