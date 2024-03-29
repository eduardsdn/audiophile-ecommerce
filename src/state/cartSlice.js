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
      if (
        state.products.filter(
          (product) => product.productId === action.payload.productId // if there already exist such product in the cart
        ).length > 0
      ) {
        const indexOfExistingProduct = state.products.findIndex(
          (product) => product.productId === action.payload.productId // find index of existing product and increase its amount in the cart by amount provided by action payload
        );
        state.products[indexOfExistingProduct].amount += action.payload.amount;
        state.numberOfItems += action.payload.amount; //increase numberOfItems by procided amount
        state.total += action.payload.price * action.payload.amount; //increase total by price of an item times provided amount
      } else {
        state.products.push(action.payload);
        state.numberOfItems += action.payload.amount; //increase numberOfItems
        state.total += action.payload.price * action.payload.amount; //increase total by price of an item times provided amount
      } // otherwise, if this product does not exist in the cart push the whole product object provided by action payload
    },
    addProductInsideCart(state, action) {
      console.log(action.payload);
      const indexOfProductInCart = state.products.findIndex(
        (product) => product.productId === action.payload.productId // find index of product in the cart and increase its amount by 1
      );
      state.products[indexOfProductInCart].amount++;
      state.numberOfItems++; //increase numberOfItems
      state.total += action.payload.price;
    },
    removeProductInsideCart(state, action) {
      const indexOfProductInCart = state.products.findIndex(
        (product) => product.productId === action.payload.productId // find index of product in the cart ....
      );
      if (action.payload.amount < 2) {
        state.products.splice(indexOfProductInCart, 1);
        state.numberOfItems = state.numberOfItems - 1;
        state.total -= action.payload.price;
      } else {
        state.products[indexOfProductInCart].amount--;
        state.numberOfItems = state.numberOfItems - 1;
        state.total -= action.payload.price;
      }
    },
    removeAllProducts() {
      return initialState;
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
