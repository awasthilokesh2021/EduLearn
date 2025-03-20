import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  role: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user;
      state.role = action.payload.role;
      state.token = action.payload.token;
    },
    logoutUser : (state) => {
      state.user = null;
      state.role = null;
      state.token = null;
    },
  },
});

export const { setUser, logoutUser  } = authSlice.actions;
export default authSlice.reducer;
