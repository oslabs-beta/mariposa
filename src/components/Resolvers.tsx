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
  
  console.log(props.uriString)
  //function that renders innertext based on the resolver status

  // useEffect(() => {
  //   fetch('/project/tables', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({uri: props.uriString})
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       setText(data.typeDefs);
  //       setSchema(data.resolverString);
  //     })
  // }, []);

  return (
    <div className = "resolverDiv">

      {/* <ThemeProvider theme={theme} > */}
        {/* <Paper elevation={2} color='primary' style={{
          border: "gray",
          maxWidth: "300px",
          height: "100%",
          // paddingLeft: "5%",
          maxHeight: '97vh',
        }}> */}
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

<<<<<<< HEAD
            <Box style={{ backgroundColor: 'rgb(245, 234, 234)', margin: '0% 0% 0% 0%', width: '100%', height: '93%', maxHeight: '100%', overflow: "scroll", padding: "0px 0px 0px 0px", borderRadius: '5px' }}>
=======
            <Box style={{ backgroundColor: 'transparent', margin: '0% 0% 0% 0%', minHeight: '93%', maxHeight: '93%', overflow: "scroll", padding: "0px 0px 0px 0px" }}>
>>>>>>> 7434185ae0132e5f70967d0db21042d8b8d0eefd
              
                <Highlight  className="javascript">
                  {resolver ? props.schema : props.text}
                </Highlight>
              
            </Box>
          </div>
        {/* </Paper> */}
      {/* </ThemeProvider > */}
    </div>
  )
}
