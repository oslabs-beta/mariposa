import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: {
      firstName: '',
      lastName: '',
      username: '',
      password: ''
    },
    pageToDisplay: {
      display: 'logIn',
      submitted: false 
    }
  }

const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers:{}
});


export default mainSlice.reducer; 