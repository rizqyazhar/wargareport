import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    fullname: "Siti Rahma",
    email: "sitirahma@mail.com",
    contact: "081349213967",
    nik: "",
    password: "YWRtaW4xMjM0NQ==",
    role: "Admin",
  },
];

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
