import {
  createSlice,
  createSelector,
  createAsyncThunk,
} from "@reduxjs/toolkit";

//action method
export const callAPI = createAsyncThunk("callAPI", async (payload) => {
  const response = await fetch(`https://dummyjson.com/${payload}`);
  return response.json();
});

const callAPISlice = createSlice({
  name: "api",
  initialState: {
    isLoading: false,
    apiRAW: {},
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(callAPI.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(callAPI.fulfilled, (state, action) => {
      state.isLoading = false;
      state.apiRAW = action.payload;
    });
    builder.addCase(callAPI.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });
  },
});

export const getApiSelectors = createSelector(
  (state) => state.api,
  (state) => state
);

export default callAPISlice.reducer;
