import { createSlice } from '@reduxjs/toolkit';
import { UserDefault } from './initialValues';

export const userSlice = createSlice({
  name: 'user',
  initialState: UserDefault,
  reducers: {
    setUserPreferences: (state, action) => {
      const data = action.payload;
      state.preferences = data;
    },
    setUserData: (state, action) => {
      const data = action.payload;
      state.userData = data;
    },
    setClearUserData: state => {
      state.userData = UserDefault.userData;
    },
    setIsLogged: (state, action) => {
      const data = action.payload;
      state.isLogged = data;
    },
    logout: state => {
      state.userData = UserDefault.userData;
      state.isLogged = UserDefault.isLogged;
    }
  }
});

export const { setUserPreferences, setUserData, setIsLogged, setClearUserData, logout } = userSlice.actions;

export default userSlice.reducer;
