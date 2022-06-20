import { configureStore } from "@reduxjs/toolkit";
import errorInfoSlice from "./errorInfoSlice";
import userInfoSlice from "./userInfoSlice";

export default configureStore({
  reducer: {
    errorInfo: errorInfoSlice,
    userInfo: userInfoSlice,
  },
});
