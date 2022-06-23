// implementation here: https://dev.to/dawnind/persist-redux-state-with-redux-persist-3k0d

import { configureStore } from "@reduxjs/toolkit";
import errorInfoSlice from "./errorInfoSlice";
import userInfoSlice from "./userInfoSlice";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const reducers = combineReducers({
  errorInfo: errorInfoSlice,
  userInfo: userInfoSlice,
});

const persistedReducer = persistReducer(persistConfig, reducers);

// export default configureStore({
//   reducer: {
//     errorInfo: errorInfoSlice,
//     userInfo: userInfoSlice,
//   },
// });

export default configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
