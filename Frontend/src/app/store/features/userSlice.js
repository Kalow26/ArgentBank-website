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

export const getUserProfile = createAsyncThunk(
  "users/getUserProfile",
  async (token) => {
    try {
      const response = await fetch(`${url}profile`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const updateUserName = createAsyncThunk(
  "users/updateUserName",
  async ({ newUserName, token }, thunkAPI) => {
    console.log(thunkAPI);
    try {
      const response = await fetch(`${url}profile`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ userName: newUserName }),
      });

      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  userInfo: {},
  statusMessage: "",
  isLogged: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // getUserProfile: (state, action) => {
    //   /* type: "/user/getUserProfile", payload : "token" */
    // },
    // updateUserName: (state, action) => {
    //   /* type : "/user/updateUserName", payload : "userName" */
    // },
    logout: (state) => {
      return { ...initialState };
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
      state.isLogged = true;
      storage.setItem("token", action.payload.body.token);
      state.statusMessage = action.payload.message;
    });
    builder.addCase(fetchUserByEmail.rejected, (state, action) => {
      state.statusMessage = action.payload.message;
    });

    builder.addCase(getUserProfile.fulfilled, (state, action) => {
      state.isLogged = true;
      state.userInfo = action.payload.body;
    });

    builder.addCase(updateUserName.fulfilled, (state, action) => {
      // console.log(action.payload);
      state.userInfo = action.payload.body;
      state.statusMessage = action.payload.message;
    });
  },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;
