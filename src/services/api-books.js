import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const api = "http://localhost:4000/books"

export const fetchBooks = createAsyncThunk("get/fetchBooks", async () => {
  const response = await axios.get(api);
  return response.data;
});