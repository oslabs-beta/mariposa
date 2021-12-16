import * as React from 'react';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Tree from './Tree'
import G6Tree from './g6tree';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import Button from '@mui/material/Button';


const theme = createTheme({ palette: { mode: 'light' } });

export default function graph(props: any) {
  return (
    <ThemeProvider theme={theme} >
      <Paper elevation={2} color='transparent' style={{
        border: "gray",
        minWidth: "100%",
        height: "100%",
        maxHeight: '97vh',
        position: 'relative',
        
      }}>
        <div className='graphD3'>
          <Tree uriString={props.uriString} />
        </div>
      </Paper>
    </ThemeProvider>
  )
}