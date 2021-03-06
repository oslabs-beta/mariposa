import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
const theme = createTheme({ palette: { mode: 'light' } });
import Highlight from 'react-highlight';

export default function Resolvers(props:any) {

  //state for the user defaulted to resolvers
  const [resolver, setResolver] = useState(false);

  return (

    <ThemeProvider theme={theme} >
      <Paper elevation={2} color='primary' style={{
        border: "gray",
        height: "100%",
        maxHeight: '97vh',
        backgroundColor: "#ffedff",
        opacity: ".99",
      }}>
        <div className='resolvers' >
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
            <ButtonGroup className="buttonGroup" variant="outlined" aria-label="outlined button group">
              <Button onClick={() => setResolver(false)}>TypeDefs</Button>
              <Button onClick={() => setResolver(true)}>Resolvers</Button>
              <Button onClick={() => { navigator.clipboard.writeText((resolver) ? props.schema : props.text) }}><ContentPasteIcon /></Button>
            </ButtonGroup>
          </Box>

          <Box style={{ backgroundColor: 'transparent', margin: '0% 0% 0% 0%', width: "100%", minHeight: '93%', maxHeight: '93%', overflowY: "scroll", padding: "0px 0px 0px 0px" }}>

            <Highlight className="javascript">
              {resolver ? props.schema : props.text}
            </Highlight>

          </Box>
        </div>
      </Paper>
    </ThemeProvider >
  )
}
