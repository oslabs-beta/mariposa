import React, {useState} from 'react';
import Grid from '@mui/material/Grid';
import Graph from '../components/Graph';
import Navbar from '../components/Navbar.tsx';
import Resolvers from '../components/Resolvers.tsx';
import Sandbox from '../components/sandbox.tsx';


export const MainDisplay = (props) => {
  return (

    <>
      <Navbar 
        style={
          {
            minWidth: "100%"
          }
        }
        graphiql={props.graphiql}
        setGraphiql={props.setGraphiql} 
      />
      {(!props.graphiql) ? 
      <Grid 
        container
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
            height: "91vh",
            padding: '.8% 2% .5% .5%'
          }
        }>
        <Grid 
          item
          xs={6}
          md={10}
        >
        <Graph></Graph>
        </Grid>
        <Grid item
          xs={6}
          md={2}
        >
          <Resolvers/>
        </Grid>
      </Grid> : <div></div>
    } 
    </>
  )
}
