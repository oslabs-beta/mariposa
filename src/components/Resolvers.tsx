import React, { useState, useEffect } from 'react';
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
  const [text, setText] = useState('');
  const [schema, setSchema] = useState('');

  //function that renders innertext based on the resolver status

  useEffect(() => {
    fetch('/project/tables', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({uri: props.uriString})
    })
      .then(res => res.json())
      .then(data => {
        console.log(data.typeDefs);
        setText(data.typeDefs);
        setSchema(data.resolverString);
      })
  }, []);

  return (
    <div>

      <ThemeProvider theme={theme} >
        <Paper elevation={2} color='primary' style={{
          border: "gray",
          minWidth: "100%",
          height: "100%",
          // paddingLeft: "5%",
          maxHeight: '97vh',
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
              <ButtonGroup variant="outlined" aria-label="outlined button group">
                <Button onClick={() => setResolver(false)}>TypeDefs</Button>
                <Button onClick={() => setResolver(true)}>Resolvers</Button>
                <Button onClick={() => { navigator.clipboard.writeText((resolver) ? schema : text) }}><ContentPasteIcon /></Button>
              </ButtonGroup>
            </Box>

            <Box style={{ backgroundColor: 'rgb(245, 234, 234)', margin: '0% 0% 0% 0%', width: '100%', height: '89%', maxHeight: '89%', overflow: "scroll", padding: "0px 0px 0px 0px" }}>
              
                <Highlight className="javascript">
                  {resolver ? schema : text}
                </Highlight>
              
            </Box>
          </div>
        </Paper>
      </ThemeProvider >
    </div>
  )
}
