import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    createAccount: (prevState, { payload }) => {
      return [
        ...prevState,
        {
          id: payload.id,
          fullname: payload.fullname,
          email: payload.email,
          contact: payload.contact,
          nik: payload.nik,
          password: payload.password,
          role: "Citizen",
          reports: [],
          notificationPreferences: {},
        },
      ];
    },
  },
});

export const { createAccount } = registerSlice.actions;

export default registerSlice.reducer;
