import { createSlice } from "@reduxjs/toolkit";

export const errorInfoSlice = createSlice({
  name: "errorInfo",
  initialState: {
    value: {
      // this is the format I am expecting
      // techError: "",
      // descriptiveError: "",
    },
  },
  reducers: {
    updateError: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateError } = errorInfoSlice.actions;

export default errorInfoSlice.reducer;
