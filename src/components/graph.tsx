import * as React from 'react';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Tree from './Tree'
import G6Tree from './g6tree';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import Button from '@mui/material/Button';


const theme = createTheme({ palette: { mode: 'dark' } });

export default function graph(props: any) {
  return (
    // <ThemeProvider theme={theme} >
      <div className="treeDiv">
      {/* <Paper> */}
        <div className='graphD3'>
          <Tree uriString={props.uriString} />
        </div>
           {/* </Paper> */}
    {/* </ThemeProvider> */}
      </div>
 
  )
}