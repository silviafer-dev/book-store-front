import { createSlice } from "@reduxjs/toolkit";
import { fetchBooks } from "../../services/api-books";

const initialState = {
  status: "idle",
  books: [],
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
  },
});

export default bookSlice.reducer;

export const selectStateBooks = (state) => state.books.books;
