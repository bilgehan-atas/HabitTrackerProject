import { createSlice } from "@reduxjs/toolkit";

const itemsSlice = createSlice({
  name: "items",
  initialState: {
    value: [],
    isLoading: false,
  },
  reducers: {
    getItemsFetch: (state) => {
      state.isLoading = true;
    },
    getItemsSuccess: (state, action) => {
      state.value = action.payload;
      state.isLoading = false;
    },
    getItemsFailure: (state) => {
      state.isLoading = false;
    },
  },
});

export const { getItemsFetch, getItemsSuccess, getItemsFailure } =
  itemsSlice.actions;
export default itemsSlice;
