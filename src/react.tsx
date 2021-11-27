import * as React from 'react';
import ReactDOM from 'react-dom';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Graph from './components/graph.tsx';
import './scss/styles.scss';
import ResponsiveAppBar from './components/navbar.tsx';

export default function App() {
  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  <ResponsiveAppBar></ResponsiveAppBar>
  <Grid item xs={6} md={6}>
  <Graph></Graph>
  </Grid>
  <Grid item xs={6} md={6}>
  <Graph></Graph>

  </Grid>
  <Grid item xs={6} md={6}>
  <Graph></Graph>

  </Grid>
  <Grid item xs={6} md={6}>
    <Graph></Graph>
  </Grid>
</Grid>
 )
}

const mainElement = document.createElement('div');
document.body.appendChild(mainElement);

ReactDOM.render(<App />, mainElement);

