import * as React from 'react';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { purple } from '@mui/material/colors';

const theme = createTheme({ palette: { mode: 'dark' } });

export default function graph() {
  return (
    <ThemeProvider theme={theme}>
    <Paper elevation={2} color='primary'>
    <div className='graphD3'>
      something
    </div>
  </Paper>
  </ThemeProvider>
 )
}