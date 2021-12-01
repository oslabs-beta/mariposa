import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Graph from './graph.tsx';
import ResponsiveAppBar from './navbar.tsx';
import Resolvers from './Resolvers.tsx';

// style={{
//   border: "solid",
//   minWidth: "100%",
//   height: "100vh",
// }}

export default function LandingPage() {
  return (

  <>
  <ResponsiveAppBar style={{minWidth: "100%"}}></ResponsiveAppBar>
  <Grid container rowSpacing={1.5} columnSpacing={{ xs: 1, sm: 2, md: 1.5}} style={{
  minWidth: "100%",
  height: "94vh",
  padding: '.8% .5% .5% .5%'
}}>
  <Grid item xs={6} md={6} >
  <Graph></Graph>
  </Grid>
  <Grid item xs={6} md={6}>
  <Resolvers />
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