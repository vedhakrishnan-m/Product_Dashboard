import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProducts } from "../../services/api";

// Async Thunk for fetching products
export const fetchProductsAsync = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await fetchProducts();
    return response;
  }
);

// Helper function to filter, sort, and paginate items
const getFilteredAndSortedItems = (state) => {
  let filteredItems = state.items;

  // Apply search filter
  if (state.searchTerm) {
    filteredItems = filteredItems.filter((product) =>
      product.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    );
  }

  // Apply category filter
  if (state.category !== "All Categories") {
    filteredItems = filteredItems.filter(
      (product) => product.category === state.category
    );
  }

  // Sort by price or other criteria
  if (state.sortBy === "price") {
    filteredItems.sort((a, b) => a.price - b.price);
  }

  // Pagination logic
  state.pagination.totalPages = Math.ceil(
    filteredItems.length / state.pagination.productsPerPage
  );

  const startIndex =
    (state.pagination.currentPage - 1) * state.pagination.productsPerPage;
  const endIndex = startIndex + state.pagination.productsPerPage;
  return filteredItems.slice(startIndex, endIndex);
};

const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    filteredItems: [],
    status: "idle",
    error: null,
    category: "All Categories",
    searchTerm: "",
    sortBy: "price",
    pagination: {
      productsPerPage: 6,
      currentPage: 1,
      totalPages: 0,
    },
  },
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
      state.pagination.currentPage = 1; // Reset page after category change
      state.filteredItems = getFilteredAndSortedItems(state);
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
      state.pagination.currentPage = 1; // Reset page after category change
      state.filteredItems = getFilteredAndSortedItems(state);
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
      state.filteredItems = getFilteredAndSortedItems(state);
    },
    setCurrentPage: (state, action) => {
      state.pagination.currentPage = action.payload;
      state.filteredItems = getFilteredAndSortedItems(state);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductsAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
        state.filteredItems = getFilteredAndSortedItems(state);
      })
      .addCase(fetchProductsAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setCategory, setSearchTerm, setSortBy, setCurrentPage } =
  productsSlice.actions;

export default productsSlice.reducer;
