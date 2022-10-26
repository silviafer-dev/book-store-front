import { createSlice } from "@reduxjs/toolkit";
import {
  createNewBook,
  fetchBook,
  fetchBooks,
  updateBook,
} from "../../services/api-books";

const initialState = {
  status: "idle",
  books: [],
  book: {},
};

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.books = action.payload;
    });
    builder.addCase(fetchBook.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.book = action.payload;
    });
    builder.addCase(createNewBook.fulfilled, (state, action) => {
      state.status = "succeeded";
      console.log(action.payload);
      state.books = [...state.books, action.payload];
    });
    builder.addCase(updateBook.fulfilled, (state, action) => {
      state.status = "succeeded";
      console.log(action.payload);
      state.books = state.books.map((item) =>
        item.id === action.payload.id ? action.payload.body : item
      );
    });
  },
});

export default bookSlice.reducer;

export const selectStateBooks = (state) => state.books.books;
export const selectStateOneBook = (state) => state.books.book;
