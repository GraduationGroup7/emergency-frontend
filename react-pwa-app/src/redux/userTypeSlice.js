import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "userType",
  initialState: {
    value: "",
  },
  reducers: {
    changeType: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeType } = counterSlice.actions;

export default counterSlice.reducer;
