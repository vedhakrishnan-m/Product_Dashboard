import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    category: "all",
    searchTerm: "",
    sortBy: "price",
  },
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
  },
});

export const { setCategory, setSearchTerm, setSortBy } = filtersSlice.actions;
export default filtersSlice.reducer;
