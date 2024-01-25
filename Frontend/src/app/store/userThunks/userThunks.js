import { createAsyncThunk } from "@reduxjs/toolkit";

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
      return thunkAPI.rejectWithValue({ message: error });
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
      throw new Error(error);
    }
  }
);

export const updateUserName = createAsyncThunk(
  "users/updateUserName",
  async ({ newUserName, token }, thunkAPI) => {
    try {
      const response = await fetch(`${url}profile`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ userName: newUserName }),
      });
      if (!response.ok) {
        const errorMessage = await response.json();
        return thunkAPI.rejectWithValue(errorMessage);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ message: error });
    }
  }
);
