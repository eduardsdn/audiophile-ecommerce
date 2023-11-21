import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  numberOfItems: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct(state = initialState, action) {
      console.log(current(state));
      if (
        state.filter(
          (product) => product.productId === action.payload.productId // if there already exist such product in the cart
        ).length > 0
      ) {
        const indexOfExistingProduct = state.findIndex(
          (product) => product.productId === action.payload.productId // find index of existing product and increase its amount in the cart by amount provided by action payload
        );
        state[indexOfExistingProduct].amount += action.payload.amount;
        console.log(action.payload);
      } else state.push(action.payload); // otherwise, if this product does not exist in the cart push the whole product object provided by action payload

      // console.log(current(state));
    },
    addProductInsideCart(state, action) {
      const indexOfProductInCart = state.findIndex(
        (product) => product.productId === action.payload.productId // find index of product in the cart and increase its amount by 1
      );
      state[indexOfProductInCart].amount++;
    },
    removeProductInsideCart(state, action) {
      const indexOfProductInCart = state.findIndex(
        (product) => product.productId === action.payload.productId // find index of product in the cart ....
      );
      if (action.payload.amount < 2) {
        state.splice(indexOfProductInCart, 1);
      } else state[indexOfProductInCart].amount--;
    },
    removeAllProducts(state) {
      return [];
    },
  },
});

export const {
  addProduct,
  addProductInsideCart,
  removeProductInsideCart,
  removeAllProducts,
} = cartSlice.actions;

export default cartSlice.reducer;
