import { configureStore, combineReducers } from "@reduxjs/toolkit";
import productsSlice from "./state/productsSlice";
import headphonesProductsReducer from "./state/headphonesProductsSlice";
import speakersProductsSlice from "./state/speakersProductsSlice";
import earphonesProductsSlice from "./state/earphonesProductsSlice";
import cartSlice from "./state/cartSlice";

import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  cart: cartSlice,
  products: productsSlice,
  headphonesProducts: headphonesProductsReducer,
  speakersProducts: speakersProductsSlice,
  earphonesProducts: earphonesProductsSlice,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  // middleware: [thunk],
});

export const persistor = persistStore(store);
export { store };

// cart: persistedCartReducer,
// products: productsSlice,
// headphonesProducts: headphonesProductsReducer,
// speakersProducts: speakersProductsSlice,
// earphonesProducts: earphonesProductsSlice,
