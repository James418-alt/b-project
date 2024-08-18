import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};

const slice = createSlice({
  name: "second",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.user = payload;
    },
  },
});

export const { setUser } = slice.actions;

export default slice.reducer;
