import { createSlice } from "@reduxjs/toolkit";
import { fetchBook, fetchBooks } from "../../services/api-books";

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
  },
});

export default bookSlice.reducer;

export const selectStateBooks = (state) => state.books.books;
export const selectStateOneBook = (state) => state.books.book;
