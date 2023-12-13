import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const url = "http://localhost:3001/api/v1/user/";

export const fetchUserByEmail = createAsyncThunk(
  "users/fetchByEmailStatus",
  async (userInfo, thunkAPI) => {
    try {
      const response = await fetch(`${url}login`, {
        method: "POST",
        headers: { "Content-Type": "application/json;charset=utf-8" },
        body: JSON.stringify(userInfo),
      });
      if (!response.ok) {
        const errorMessage = await response.json();
        return thunkAPI.rejectWithValue(errorMessage);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ message: "Network error" });
    }
  }
);

const initialState = {
  userInfo: {},
  statusMessage: "",
  storage: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {},
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
  extraReducers: (builder) => {
    builder.addCase(fetchUserByEmail.pending, (state) => {
      state.statusMessage = "Logging in...";
    });
    builder.addCase(fetchUserByEmail.fulfilled, (state, action) => {
      const storage = action.meta.arg.rememberMe
        ? localStorage
        : sessionStorage;
      storage.setItem("token", action.payload.body.token);
      state.storage = storage;
      state.statusMessage = action.payload.message;
    });
    builder.addCase(fetchUserByEmail.rejected, (state, action) => {
      state.statusMessage = action.payload.message;
    });
  },
});

export const { login, getUserProfile, updateUserName, logout } =
  userSlice.actions;

export default userSlice.reducer;
