import { createSlice, createSelector } from "@reduxjs/toolkit";

const titleSlice = createSlice({
  name: "title",
  initialState: "Products",
  reducers: {
    setTitle: (state, action) => action.payload,
  },
});
export const getTitleSelectors = createSelector(
  (state) => state.title,
  (state) => state
);

export const { setTitle } = titleSlice.actions;

export default titleSlice.reducer;
