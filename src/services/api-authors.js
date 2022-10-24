import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const api = "http://localhost:4000/authors";

export const fetchAuthors = createAsyncThunk("get/fetchAuthors", async () => {
  const response = await axios.get(api);
  return response.data;
});
