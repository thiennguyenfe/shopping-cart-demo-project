import { createSlice } from "@reduxjs/toolkit";
import { notification } from "antd";

interface ICart {
  key: number;
  name: string;
  image: string;
  price: number;
  cartQuantity: number;
}

export type Cart = {
  cartItems: ICart[];
  cartTotalQuantity: number;
  cartTotalAmount: number;
};

const initialState: Cart = {
  cartItems:
    typeof window !== "undefined" && localStorage.getItem("carts")
      ? JSON.parse(localStorage.getItem("carts") as string)
      : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const existingIndex = state.cartItems.findIndex(
        (item) => item.key === action.payload.id
      );

      if (existingIndex >= 0) {
        state.cartItems[existingIndex] = {
          ...state.cartItems[existingIndex],
          cartQuantity: state.cartItems[existingIndex].cartQuantity + 1,
        };
      } else {
        let tempProductItem = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProductItem);
        notification.success({
          message: "Add to cart successfully !",
        });
      }
      localStorage.setItem("carts", JSON.stringify(state.cartItems));
    },
    decreaseProduct(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.key === action.payload.id
      );

      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const newCartItems = state.cartItems.filter(
          (item) => item.key !== action.payload.id
        );
        state.cartItems = newCartItems;
      }

      localStorage.setItem("carts", JSON.stringify(state.cartItems));
    },
    removeFromCart(state, action) {
      state.cartItems.map((cartItem) => {
        if (cartItem.key === action.payload.id) {
          const newCartItems = state.cartItems.filter(
            (item) => item.key !== action.payload.id
          );

          state.cartItems = newCartItems;
        }
      });

      localStorage.setItem("carts", JSON.stringify(state.cartItems));
    },
    getTotal(state) {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        { total: 0, quantity: 0 }
      );

      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    },
    clearCart(state) {
      state.cartItems = [];

      localStorage.setItem("carts", JSON.stringify(state.cartItems));
    },
  },
});

export const {
  addToCart,
  decreaseProduct,
  removeFromCart,
  getTotal,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
