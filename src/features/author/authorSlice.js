import { createSlice } from "@reduxjs/toolkit";
import { fetchAuthors } from "../../services/api-authors";

const initialState = {
  status: "idle",
  authors: [],
};

const authorSlice = createSlice({
  name: "authors",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchAuthors.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.authors = action.payload;   
    });
  },
});

export default authorSlice.reducer;

export const selectStateBooks = (state) => state.books.books;
