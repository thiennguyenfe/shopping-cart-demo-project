import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "./src/redux/api/productAPI";
// ...
import counterReducer from "./src/redux/slice/counterSlice";
import productsReducer, { productsFetch } from "./src/redux/slice/productSlide";
import categoryReducer, {
  categoryFetch,
} from "./src/redux/slice/categorySlide";
import { categoryApi } from "./src/redux/api/categoryApi";

import cartReducer from "./src/redux/slice/cartSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    category: categoryReducer,
    products: productsReducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
    [productApi.reducerPath]: productApi.reducer,

    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      categoryApi.middleware,
      productApi.middleware
    ),
});

store.dispatch(productsFetch());
store.dispatch(categoryFetch());

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
