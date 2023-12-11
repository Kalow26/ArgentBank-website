import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: {},
  statusMessage: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      /* type: "/user/login", payload : "email, password" */
    },
    getUserProfile: (state, action) => {
      /* type: "/user/getUserProfile", payload : "token" */
    },
    updateUserName: (state, action) => {
      /* type : "/user/updateUserName", payload : "userName" */
    },
    logout: (state, action) => {
      /* type : "LOGOUT", payload : "token" */
    },
  },
});

export const { login, getUserProfile, updateUserName, logout } =
  userSlice.actions;

export default userSlice.reducer;
