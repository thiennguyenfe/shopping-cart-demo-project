import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface ICategory {
  id: number;
  name: string;
  img: string;
  quantity: number;
}

export type Category = {
  items: ICategory[];
  status: string;
};

const initialState: Category = {
  items: [],
  status: "",
};

export const categoryFetch = createAsyncThunk(
  "category/categoryFetch",
  async () => {
    try {
      const response = await axios.get(
        "https://63522738dfe45bbd55d03832.mockapi.io/category"
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(categoryFetch.pending, (state, { payload }) => {
        state.status = "pending";
      })
      .addCase(categoryFetch.fulfilled, (state, { payload }) => {
        state.items = payload;
        state.status = "success";
      })
      .addCase(categoryFetch.rejected, (state, { payload }) => {
        state.status = "rejected";
      });
  },
});

export default categorySlice.reducer;
