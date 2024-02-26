import { configureStore } from "@reduxjs/toolkit";
import globalSlice from "./reducer/global";

export const store = configureStore({
  reducer: {
    global: globalSlice,
  },
});
