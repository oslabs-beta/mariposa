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

export default function LandingPage(props: any) {

  return (
    <>
      <ResponsiveAppBar style={{ minWidth: "100%" }} setUriBoolean={props.setUriBoolean}></ResponsiveAppBar>
      {!props.graphiql && (
        <div>
          <Graph uriString={props.uriString} />            
          <Resolvers uriString={props.uriString} />
        </div>)
      }
    </>
  )
}