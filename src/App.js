import React, { useState } from 'react';
import { BrowserRouter as Router, HashRouter, Route, Routes } from 'react-router-dom'

import LandingPageContainer from './components/StaticPages/LandingPageContainer';
import AboutUs from './components/StaticPages/AboutUs';
import Download from './components/StaticPages/Download';




export const App = () => {
  return(
    <Router>
    <Routes>
    <Route 
      exact path = {"/"} 
      element ={<LandingPageContainer />} 
      />
    <Route 
      exact path = "/about" 
      element ={<AboutUs/>} 
      />
      <Route 
      exact path = "/download" 
      element ={<Download/>} 
      />
    </Routes>
  </Router>
   
    ); 
};




