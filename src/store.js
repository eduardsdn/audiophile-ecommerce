import { configureStore } from "@reduxjs/toolkit";
import headphonesProductsReducer from "./state/headphonesProductsSlice";

export default configureStore({
  reducer: {
    headphonesProducts: headphonesProductsReducer,
  },
});
