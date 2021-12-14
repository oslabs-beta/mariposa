import React, { useState } from 'react';
import { BrowserRouter as Router, HashRouter, Route, Routes } from 'react-router-dom'
import LandingPage from '../components/landingPage';
import { LoginForm } from '../components/formComponents/LoginForm';
import { RegisterForm } from '../components/formComponents/RegisterForm';


export const MainContainer = () => {
  return(
    <HashRouter>
      <Routes>
      <Route 
        exact path = {"/"} 
        element ={<LoginForm/>} 
        />
      <Route 
        exact path = "/register" 
        element ={<RegisterForm/>} 
        />
        <Route 
        exact path = "/main" 
        element ={<LandingPage/>} 
        />
      </Routes>
    </HashRouter>
  ); 
};
