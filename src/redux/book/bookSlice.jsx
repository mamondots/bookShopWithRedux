import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchKey: "",
  type: "All",
};

const bookSlice = createSlice({
  name: "bookFilter",
  initialState,
  reducers: {
    bookTypeChange: (state, action) => {
      state.type = action.payload;
    },
    changeFiltred: (state, action) => {
      state.searchKey = action.payload?.toLowerCase() || "";
    },
  },
});

export const { bookTypeChange, changeFiltred } = bookSlice.actions;
export default bookSlice.reducer;
