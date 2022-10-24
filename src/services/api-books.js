import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const api = "http://localhost:4000/books";

export const fetchBooks = createAsyncThunk("get/fetchBooks", async () => {
  const response = await axios.get(api);
  return response.data;
});
export const fetchBook = createAsyncThunk("get/fetchBook", async (id) => {
  const response = await axios.get(`${api}/book/${id}`);
  return response.data;
});

export const createNewBook = createAsyncThunk(
  "create/createNewBook",
  async (data) => {
    const response = await axios.post(`${api}/book`, data);
    return response.data;
  }
);
