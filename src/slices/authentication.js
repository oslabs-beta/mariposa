//standalone runtime for Regenerator-compiled generator and async functions (DO NOT DELETE)
import regeneratorRuntime from "regenerator-runtime";
//createAsyncThunk returns a standard Redux thunk action creator 
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
//use authService to make async requests - authService.register, login, logout  
import { authService } from '../services/auth_service';
// setMessage dispatched if authentication is successful or fails
import { setMessage } from './messages';
//create async thunks 

const user = JSON.parse(localStorage.getItem("user"));

export const register = createAsyncThunk(
  'auth/register', //action type
  async ({         //payloadCreator callback that returns a promise 
    firstname, 
    lastname, 
    username, 
    email, 
    password
   }, 
   thunkAPI        //object that contains all parameters normally passed to a Redux thunk function
   ) => {
    try {
      const response = await authService.register(firstname, lastname, username, email, password);
      thunkAPI.dispatch(setMessage(response.data.message));
      return response.data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  }
); 

export const login = createAsyncThunk(
  "auth/login",
  async ({ username, password }, thunkAPI) => {
    try {
      const data = await authService.login(username, password);
      return { user: data };
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  }
);

export const logout = createAsyncThunk(
  "auth/logout", 
  async () => {
    await authService.logout();
});

//set initial state here 
const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };

  const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: { //extraReducers allows createSlice to respond to other action types besides the types it has generated
      [register.fulfilled]: (state, action) => {
        state.isLoggedIn = false;
      },
      [register.rejected]: (state, action) => {
        state.isLoggedIn = false;
      },
      [login.fulfilled]: (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload.user;
      },
      [login.rejected]: (state, action) => {
        state.isLoggedIn = false;
        state.user = null;
      },
      [logout.fulfilled]: (state, action) => {
        state.isLoggedIn = false;
        state.user = null;
      },
    },
  });
  
  const { reducer } = authSlice;
  export default reducer;