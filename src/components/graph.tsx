import * as React from 'react';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Tree from './Tree.tsx'


const theme = createTheme({ palette: { mode: 'light' } });

export default function graph() {
  return (
    <ThemeProvider theme={theme} >
    <Paper elevation={2} color='primary' style={{
  border: "gray",
  minWidth: "100%",
  height: "100%",
}}>
    <div className='graphD3'>
      <Tree/>
    </div>
  </Paper>
  </ThemeProvider>
 )
}