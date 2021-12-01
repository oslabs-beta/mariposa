import * as React from 'react';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
const theme = createTheme({ palette: { mode: 'light' } });

export default function Resolvers() {
  return (
    <ThemeProvider theme={theme} >
    <Paper elevation={2} color='primary' style={{
  border: "gray",
  minWidth: "100%",
  height: "100%",
  position: 'relative',
  paddingBottom: '.5%'
}}>
    <div className='resolvers'>
      <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}
    >
      <ButtonGroup variant="outlined" aria-label="outlined button group">
        <Button>Schema</Button>
        <Button>Resolvers</Button>
      </ButtonGroup>
      </Box>
      <Button style={{position: 'absolute', bottom: '0%', right: '0%'}} ><ContentPasteIcon /></Button>
    </div>
  </Paper>
  </ThemeProvider>
 )
}

// onClick={() => {navigator.clipboard.writeText(this.state.textToCopy)}}