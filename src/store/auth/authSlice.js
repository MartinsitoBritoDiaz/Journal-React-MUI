import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status: 'checking', // 'not-authenticated', 'authenticated'
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null,
  },
  reducers: {
    logIn: (state, { payload }) => {
      state.status = 'authenticated'; // 'not-authenticated', 'authenticated'
      state.uid = payload.uid;
      state.email = payload.email;
      state.displayName = payload.displayName;
      state.photoURL = payload.photoURL;
      state.errorMessage = payload.errorMessage;
    },

    logOut: ( state, { payload } ) => {
      state.status = 'not-authenticated'; // 'not-authenticated', 'authenticated'
      state.uid = null;
      state.email = null;
      state.displayName = null;
      state.photoURL = null;
      state.errorMessage = payload?.errorMessage;
    },
    
    checkingCredentials: ( state ) => {
      state.status = 'checking';
    },
  },
});

// Action creators are generated for each case reducer function
export const { logIn, logOut, checkingCredentials } = authSlice.actions;
