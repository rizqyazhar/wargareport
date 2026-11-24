import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loggedIn: "",
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    addUserLogin: (prevState, { payload }) => {
      return {
        ...prevState,
        loggedIn: payload,
      };
    },
  },
});

export const { addUserLogin } = loginSlice.actions;

export default loginSlice.reducer;
