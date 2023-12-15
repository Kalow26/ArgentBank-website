import { createSlice } from "@reduxjs/toolkit";
import {
  fetchUserByEmail,
  getUserProfile,
  updateUserName,
} from "../userThunks/userThunks";

import {
  handleFetchUserByEmailFullfilled,
  handleFetchUserByEmailRejected,
  handleFetchUserByEmailPending,
  handleGetUserProfileFullfilled,
  handleUpdateUserNameFullfilled,
  handleUpdateUserNamePending,
  handleUpdateUserNameRejected,
} from "../userReducersHelpers/userReducersHelpers";

const initialState = {
  userInfo: {},
  statusMessage: "",
  isLogged: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: () => {
      return { ...initialState };
    },
    handleStatutMessage: (state) => {
      state.statusMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserByEmail.pending, handleFetchUserByEmailPending);
    builder.addCase(
      fetchUserByEmail.fulfilled,
      handleFetchUserByEmailFullfilled
    );
    builder.addCase(fetchUserByEmail.rejected, handleFetchUserByEmailRejected);

    builder.addCase(getUserProfile.fulfilled, handleGetUserProfileFullfilled);

    builder.addCase(updateUserName.pending, handleUpdateUserNamePending);

    builder.addCase(updateUserName.rejected, handleUpdateUserNameRejected);

    builder.addCase(updateUserName.fulfilled, handleUpdateUserNameFullfilled);
  },
});

export const { logout, handleStatutMessage } = userSlice.actions;

export default userSlice.reducer;
