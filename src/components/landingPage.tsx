import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Graph from './graph';
import ResponsiveAppBar from './navbar';
import Resolvers from './Resolvers';
import Sandbox from './sandbox';

// style={{
//   border: "solid",
//   minWidth: "100%",
//   height: "100vh",
// }}

//add the conditional rendering right under the Grid

export default function LandingPage(props:any) {
  
  return (

  <>
  <ResponsiveAppBar style={{minWidth: "100%"}} graphiql={props.graphiql} setGraphiql={props.setGraphiql}></ResponsiveAppBar>
  {(!props.graphiql) ?   
  <Grid container rowSpacing={1.5} columnSpacing={{ xs: 1, sm: 2, md: 1.5}} style={{
  minWidth: "100%",
  height: "92vh",
  padding: '.8% 0% 0% .0%'
}}>
  <Grid item xs={6} md={9} >
  <Graph></Graph>
  </Grid>
  <Grid item xs={6} md={3} >
  <Resolvers />
  </Grid>
</Grid> :
  <div></div>}
  </>
 )
}