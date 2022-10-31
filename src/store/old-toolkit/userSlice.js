import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoading: false,
  },
  reducers: {
    signUpFetch: (state) => {
      state.isLoading = true;
    },
    signUpFetchSuccess: (state) => {
      state.isLoading = false;
    },
  },
});

export const { signUpFetch, signUpFetchSuccess } = userSlice.actions;
export default userSlice;
