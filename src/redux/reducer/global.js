import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  top: true,
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setTop: (state) => {
      state.top = !state.top;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setTop } = globalSlice.actions;

export default globalSlice.reducer;
