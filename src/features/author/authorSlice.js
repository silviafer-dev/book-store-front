import { createSlice } from "@reduxjs/toolkit";
import {
  createNewAuthor,
  fetchAuthor,
  fetchAuthors,
} from "../../services/api-authors";

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
    builder.addCase(createNewAuthor.fulfilled, (state, action) => {
      state.status = "succeeded";
      console.log(action.payload);
      state.authors = [...state.authors, action.payload];
    });
  },
});

export default authorSlice.reducer;

export const selectStateAuthors = (state) => state.authors.authors;
export const selectStateOneAuthor = (state) => state.authors.author;
