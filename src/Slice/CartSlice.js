import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cart: [],
  // value:0,
  quantity: 0,
  amount: null,
};
const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const arr = state.cart.map((ele) => ele.id);
      state.cart = arr.includes(action.payload.id)
        ? state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, noOfItem: item.noOfItem + 1 }
              : { ...item }
          )
        : [...state.cart, { ...action.payload, noOfItem: 1 }];
    },
    remove: (state, action) => {
      state.cart = state.cart.filter(
        (ProductId) => ProductId.id !== action.payload
      );
    },
    clearAll: (state) => {
      state.cart = [];
    },
    addition: (state) => {
      state.value += 1;
    },
    subtraction: (state) => {
      state.value -= 1;
    },
  },
});
export default CartSlice.reducer;
export const { addToCart, remove, clearAll, addition, subtraction } =
  CartSlice.actions;
