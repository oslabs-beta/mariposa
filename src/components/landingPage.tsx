import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Graph from './graph.tsx';
import ResponsiveAppBar from './navbar.tsx';
import Tree from './Tree.jsx'



export default function LandingPage() {
  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  <ResponsiveAppBar></ResponsiveAppBar>
  <Grid item xs={6} md={6}>
  <Graph></Graph>
  </Grid>
  <Grid item xs={6} md={6}>
  <Graph></Graph>

  </Grid>
  <Grid  item xs={6} md={6}>
  <Graph></Graph>

  </Grid>
  <Grid item xs={6} md={6}>
    <Graph></Graph>
  </Grid>
</Grid>
 )
}