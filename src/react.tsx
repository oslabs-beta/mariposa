import * as React from 'react';
import ReactDOM from 'react-dom';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/MenuItem';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import { Resizable, ResizableBox } from 'react-resizable';

export default function App() {
  return (
    <Grid container spacing={2}>
  <Grid item xs={6} md={6}>
    <Item>xs=6 md=8</Item>
  </Grid>
  <Grid item xs={6} md={6}>
    <Item>xs=6 md=4</Item>
  </Grid>
  <Grid item xs={6} md={6}>
    <Item>xs=6 md=4</Item>
  </Grid>
  <Grid item xs={6} md={6}>
  <ResizableBox width={200} height={200} draggableOpts={{x}}
        minConstraints={[100, 100]} maxConstraints={[300, 300]}>
      <span>Contents</span>
    </ResizableBox>
  </Grid>
</Grid>
  )
}

const mainElement = document.createElement('div');
document.body.appendChild(mainElement);

ReactDOM.render(<App />, mainElement);

