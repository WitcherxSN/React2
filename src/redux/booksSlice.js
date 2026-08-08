import { createSlice } from "@reduxjs/toolkit";
import books from "../data/books";
// it will creat Redux state for managing the library books
const booksSlice = createSlice({
  name: "books",

  initialState: books,

  reducers: {

    // It will Add the newly submitted book at the beginning of the list
  addBook: (state, action) => {
    state.unshift(action.payload);
  },
},
});

export const { addBook } = booksSlice.actions;

export default booksSlice.reducer;