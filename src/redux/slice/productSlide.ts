import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  items: [],
  status: "",
};

export const productsFetch = createAsyncThunk(
  "products/productsFetch",
  async () => {
    try {
      const response = await axios.get(
        "https://63522738dfe45bbd55d03832.mockapi.io/products"
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(productsFetch.pending, (state, { payload }) => {
        state.status = "pending";
      })
      .addCase(productsFetch.fulfilled, (state, { payload }) => {
        state.items = payload;
        state.status = "success";
      })
      .addCase(productsFetch.rejected, (state, { payload }) => {
        state.status = "rejected";
      });
  },
});

export default productsSlice.reducer;
