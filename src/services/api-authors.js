import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const api = "http://localhost:4000/authors";

export const fetchAuthors = createAsyncThunk("get/fetchAuthors", async () => {
  const response = await axios.get(api);
  return response.data;
});

export const fetchAuthor = createAsyncThunk("get/fetchAuthor", async (id) => {
  const response = await axios.get(`${api}/author/${id}`);
  return response.data;
});

export const createNewAuthor = createAsyncThunk(
  "create/createNewAuthor",
  async (data) => {
    const response = await axios.post(`${api}/author`, data);
    console.log(data);
    return response.data;
  }
);
