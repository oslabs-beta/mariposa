import { configureStore } from '@reduxjs/toolkit';
//import reducers
import authReducer from './slices/authentication';
import messageReducer from './slices/messages';
//bundle reducers 
const reducer = {
  auth: authReducer,
  message: messageReducer
}

const store = configureStore({
  reducer: reducer,
  devTools: true,
})

export default store;