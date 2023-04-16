import { createSlice, createSelector } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: 0,
  reducers: {
    addItem: (state, action) => state + action.payload,
    removeItem: (state, action) => state - action.payload,
  },
});

export const getItemSelectors = createSelector(
  (state) => state.cart,
  (state) => state
);
export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
