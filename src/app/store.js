import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "../features/book/bookSlice";
import authorsReducer from "../features/author/authorSlice";

export const store = configureStore({
  reducer: {
    books: booksReducer,
    authors: authorsReducer,
  },
});
