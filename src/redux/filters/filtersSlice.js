import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "filters",
  initialState: {
    filters: {
      name: "",
    },
  },
  selectors: {
    selectNameFilter: (state) => state.filters.name,
  },
  reducers: {
    changeFilter: (state, { payload }) => {
      state.filters.name = payload;
    },
  },
});

export const filterReducer = slice.reducer;
export const { changeFilter } = slice.actions;
export const { selectNameFilter } = slice.selectors;
