import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  numberOfItems: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct(state, action) {
      console.log(state.products);
      if (
        state.products.filter(
          (product) => product.productId === action.payload.productId // if there already exist such product in the cart
        ).length > 0
      ) {
        const indexOfExistingProduct = state.products.findIndex(
          (product) => product.productId === action.payload.productId // find index of existing product and increase its amount in the cart by amount provided by action payload
        );
        state.products[indexOfExistingProduct].amount += action.payload.amount;
        state.numberOfItems += action.payload.amount; //increase numberOfItems
      } else {
        state.products.push(action.payload);
        state.numberOfItems += action.payload.amount; //increase numberOfItems
      } // otherwise, if this product does not exist in the cart push the whole product object provided by action payload

      // console.log(current(state));
    },
    addProductInsideCart(state, action) {
      const indexOfProductInCart = state.products.findIndex(
        (product) => product.productId === action.payload.productId // find index of product in the cart and increase its amount by 1
      );
      state.products[indexOfProductInCart].amount++;
      state.numberOfItems++; //increase numberOfItems
    },
    removeProductInsideCart(state, action) {
      const indexOfProductInCart = state.products.findIndex(
        (product) => product.productId === action.payload.productId // find index of product in the cart ....
      );
      if (action.payload.amount < 2) {
        state.products.splice(indexOfProductInCart, 1);
      } else state.products[indexOfProductInCart].amount--;
    },
    removeAllProducts(state) {
      return {
        products: [],
        numberOfItems: 0,
        total: 0,
      };
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
