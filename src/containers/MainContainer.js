import React, { useState } from 'react';
import { BrowserRouter as Router, HashRouter, Route, Routes } from 'react-router-dom'

import { LoginForm } from '../components/oldFormComponents/LoginForm';
import { RegisterForm } from '../components/oldFormComponents/RegisterForm';
import { MainDisplay } from './MainDisplay';


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
        element ={<MainDisplay/>} 
        />
      </Routes>
    </HashRouter>
  ); 
};
