import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./state/productsSlice";
import headphonesProductsReducer from "./state/headphonesProductsSlice";

export default configureStore({
  reducer: {
    products: productsSlice,
    headphonesProducts: headphonesProductsReducer,
  },
});
