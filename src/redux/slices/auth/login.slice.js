import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loggedIn: { email: null, role: null },
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    addUserLogin: (prevState, { payload }) => {
      return {
        ...prevState,
        loggedIn: {
          ...prevState.loggedIn,
          email: payload.email,
          role: payload.role,
        },
      };
    },
    userLogout: (prevState) => {
      return {
        ...prevState,
        loggedIn: {
          ...prevState.loggedIn,
          email: null,
          role: null,
        },
      };
    },
  },
});

export const { addUserLogin, userLogout } = loginSlice.actions;

export default loginSlice.reducer;
