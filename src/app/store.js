import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "../features/book/bookSlice";

export const store = configureStore({
  reducer: {
    books: booksReducer,
  },
});
