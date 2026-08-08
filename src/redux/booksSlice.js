import { createSlice } from "@reduxjs/toolkit";
import books from "../data/books";

const booksSlice = createSlice({
  name: "books",

  initialState: books,

  reducers: {
  },
});

export default booksSlice.reducer;