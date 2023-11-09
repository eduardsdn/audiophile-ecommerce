import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./state/productsSlice";
import headphonesProductsReducer from "./state/headphonesProductsSlice";
import speakersProductsSlice from "./state/speakersProductsSlice";
import earphonesProductsSlice from "./state/earphonesProductsSlice";

export default configureStore({
  reducer: {
    products: productsSlice,
    headphonesProducts: headphonesProductsReducer,
    speakersProducts: speakersProductsSlice,
    earphonesProducts: earphonesProductsSlice,
  },
});
