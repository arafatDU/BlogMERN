import { createSlice } from "@reduxjs/toolkit";

const isTokenPresentInCookies = () => {
  const token = document.cookie.split(';'.find(cookie => cookie.trim().startWith('token=')));
  return !!token;
}

const loadUserFromStorage = () => {
  try {
    const serializedState = localStorage.getItem("user")
    if(serializedState === null) 
      return {user: JSON.parse(serializedState)};

    return {user: JSON.parse(serializedState)};
  } catch (error) {
    return {user: null};
  }
}

const initialState = loadUserFromStorage();


const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user;
      localStorage.setItem("user", JSON.stringify(state.user));
    },
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("user");
    },
  },
});


export const { setUser, logout } = authSlice.actions;

export default authSlice.reducer;