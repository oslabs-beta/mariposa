import React, { useState } from 'react';
import { HashRouter, Switch, Route, Link } from "react-router-dom";

import { useSelector, useDispatch, DefaultRootState } from 'react-redux';
// import LandingPage from './components/LandingPage';
// import LoginForm from './components/LoginForm';
import { NewLoginForm } from '../components/NewLoginForm';
import { RegisterPage } from '../components/RegisterPage';


export const MainContainer = () => {
  return(
    <div>
      <NewLoginForm />
      <RegisterPage />
    </div>
  ); 
};
