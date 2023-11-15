import { createSlice, current } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct(state, action) {
      if (
        state.filter(
          (product) => product.productId === action.payload.productId // if there already exist such product in the cart
        ).length > 0
      ) {
        const indexOfExistingProduct = state.findIndex(
          (product) => product.productId === action.payload.productId // find index of existing product and increase its amount in the cart by amount provided by action payload
        );
        state[indexOfExistingProduct].amount += action.payload.amount;
      } else state.push(action.payload); // otherwise, if this product does not exist in the cart push the whole product object provided by action payload

      console.log(current(state));
    },
    // removeProduct(state, action) {
    //   if (
    //     state.filter(
    //       (product) => product.productId === action.payload.productId
    //     ).length > 0
    //   ) {
    //     const indexOfExistingProduct = state.findIndex(
    //       (product) => product.productId === action.payload.productId
    //     );
    //     state.splice(indexOfExistingProduct, 1)
    //   }
    // },
  },
});

export const { addProduct } = cartSlice.actions;

export default cartSlice.reducer;
