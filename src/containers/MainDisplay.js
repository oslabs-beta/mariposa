import React, {useState} from 'react';
import Grid from '@mui/material/Grid';
import Graph from '../components/graph';
import ResponsiveAppBar from '../components/navbar.tsx';
import Resolvers from '../components/Resolvers.tsx';
import Sandbox from '../components/sandbox.tsx';

export const MainDisplay = (props) => {
  return (

    <>
      <ResponsiveAppBar style={
          {minWidth: "100%"}
        }
        graphiql={
          props.graphiql
        }
        setGraphiql={
          props.setGraphiql
      }></ResponsiveAppBar>
      {
      (!props.graphiql) ? <Grid container
        rowSpacing={1.5}
        columnSpacing={
          {
            xs: 1,
            sm: 2,
            md: 1.5
          }
        }
        style={
          {
            minWidth: "100%",
            height: "94vh",
            padding: '.8% .5% .5% .5%'
          }
      }>
        <Grid item
          xs={6}
          md={6}>
          <Graph></Graph>
        </Grid>
        <Grid item
          xs={6}
          md={6}>
          <Resolvers/>
        </Grid>
      </Grid> : <div>hello world</div>
    } </>
  )
}
