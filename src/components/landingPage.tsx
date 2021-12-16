import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Graph from './graph.tsx';
import ResponsiveAppBar from './navbar.tsx';
import Resolvers from './Resolvers.tsx';
import Sandbox from './sandbox.tsx';

// style={{
//   border: "solid",
//   minWidth: "100%",
//   height: "100vh",
// }}

//add the conditional rendering right under the Grid

export default function LandingPage(props:any) {
  
  return (

  <>
  <ResponsiveAppBar style={{minWidth: "100%"}} setUriBoolean={props.setUriBoolean}></ResponsiveAppBar>
  {(!props.graphiql) ?   
  <Grid container rowSpacing={1.5} columnSpacing={{ xs: 1, sm: 2, md: 1.5}} style={{
  minWidth: "100%",
  height: "92vh",
  padding: '.8% 0% 0% .0%'
}}>
  <Grid item xs={6} md={9} >
  <Graph uriString={props.uriString}></Graph>
  </Grid>
  <Grid item xs={6} md={3} >
  <Resolvers uriString={props.uriString}/>
  </Grid>
</Grid> :
  <div></div>}
  </>
 )
}