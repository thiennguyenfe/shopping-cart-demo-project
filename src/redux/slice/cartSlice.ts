import { SmileOutlined } from "@ant-design/icons";
import { createSlice } from "@reduxjs/toolkit";
import { notification } from "antd";
import type { NotificationPlacement } from "antd/es/notification";
import React from "react";

interface ICart {
  id: number;
  name: string;
  img: string;
  cartQuantity: number;
}

export type Cart = {
  cartItems: ICart[];
  cartTotalQuantity: number;
  cartTotalAmount: number;
};

const initialState: Cart = {
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const existingIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingIndex >= 0) {
        state.cartItems[existingIndex] = {
          ...state.cartItems[existingIndex],
          cartQuantity: state.cartItems[existingIndex].cartQuantity + 1,
        };
        notification.open({
          message: "Add to cart successfully !",
        });
      }
    },
    decreaseCart(state, action) {},
    removeFromCart(state, action) {},
    getTotals(state, action) {},
    clearCart(state, action) {},
  },
});

export const { addToCart, decreaseCart, removeFromCart, getTotals, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
