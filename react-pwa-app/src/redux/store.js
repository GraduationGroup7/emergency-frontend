import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import userTypeSlice from "./userTypeSlice";

export default configureStore({
  reducer: {
    user: userSlice,
    userType: userTypeSlice,
  },
});
