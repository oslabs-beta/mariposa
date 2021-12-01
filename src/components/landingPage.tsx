import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Graph from './graph.tsx';
import ResponsiveAppBar from './navbar.tsx';
import Tree from './Tree.jsx'

// style={{
//   border: "solid",
//   minWidth: "100%",
//   height: "100vh",
// }}

export default function LandingPage() {
  return (

  <>
  <ResponsiveAppBar></ResponsiveAppBar>
  <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{
  minWidth: "100%",
  height: "90vh",
}}>
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
  </>
 )
}