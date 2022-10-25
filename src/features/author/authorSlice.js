import { createSlice } from "@reduxjs/toolkit";
import { fetchAuthor, fetchAuthors } from "../../services/api-authors";

const initialState = {
  status: "idle",
  authors: [],
  author: [],
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
    builder.addCase(fetchAuthor.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.author = [...action.payload];
    });
  },
});

export default authorSlice.reducer;

export const selectStateAuthors = (state) => state.authors.authors;
export const selectStateOneAuthor = (state) => state.authors.author;
