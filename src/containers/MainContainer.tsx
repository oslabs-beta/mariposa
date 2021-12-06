import React, { useState } from 'react';
import { useSelector, useDispatch, DefaultRootState } from 'react-redux';
// import LandingPage from './components/LandingPage';
// import LoginForm from './components/LoginForm';
import LoginForm from '../components/LoginForm';
import { NewLoginForm } from '../components/NewLoginForm';

export const MainContainer = () => {
  return(
      <NewLoginForm />
  ); 
};
