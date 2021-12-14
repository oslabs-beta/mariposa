import * as React from 'react';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Tree from './Tree.tsx'
import G6Tree from './g6tree.tsx';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import Button from '@mui/material/Button';


const theme = createTheme({ palette: { mode: 'light' } });

export default function graph() {
  return (
    <ThemeProvider theme={theme} >
    <Paper elevation={2} color='primary' style={{
  border: "gray",
  minWidth: "100%",
  height: "100%",
  maxHeight: '97vh',
  position: 'relative',
  opacity: '0.85'
}}>
    <div className='graphD3'>
      {/* <Tree/> */}
      <G6Tree />
    </div>
    <Button style={{position: 'absolute', bottom: '0%', right: '0%'}} ><OpenInFullIcon /></Button>
  </Paper>
  </ThemeProvider>
 )
}