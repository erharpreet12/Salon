import { createSlice } from "@reduxjs/toolkit";

const app = createSlice({
  name: "app",
  initialState: {
    isLoading: false,
    imgObj: "",
  },
  reducers: {
    setLoading: (state, { payload: { isLoading } }) => {
      state.isLoading = isLoading;
    },

    setLatestImg: (state, { payload: { imgObj } }) => {
      state.imgObj = imgObj;
    },
  },
});

export const { setLoading, setLatestImg } = app.actions;

export default app.reducer;
