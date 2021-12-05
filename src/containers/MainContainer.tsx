import React, { useState } from 'react';
import { useSelector, useDispatch, DefaultRootState } from 'react-redux';
// import LandingPage from './components/LandingPage';
// import LoginForm from './components/LoginForm';
import { NewLoginForm } from '../components/NewLoginForm';

export const MainContainer = () =>{
  const dispatch = useDispatch();
  const pageToDisplay = useSelector((state: any)=> state.main.pageToDisplay); //access state of main slice
  console.log(pageToDisplay)
  return(
    <div>
      if(pageToDisplay === "logIn") <NewLoginForm />;
      {/* if(pageToDisplay === "register") <RegisterForm />;
      if(pageToDisplay === "landingPage") <LandingPage />; */}
    </div>
  );
};