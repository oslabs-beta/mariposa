import React, { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { UnControlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/mode/javascript/javascript';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
const theme = createTheme({ palette: { mode: 'light' } });
//import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import Highlighter from './CodeHighlight.tsx';
import { javascript } from 'webpack';



export default function Resolvers() {

  //state for the user defaulted to resolvers
  const [resolver, setResolver] = useState(true);
  const [text, setText] = useState('something');
  const [schema, setSchema] = useState('');

  //function that renders innertext based on the resolver status

  useEffect (() => {
    fetch('/project/tables', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data.typeDefs);
        setText(data.typeDefs);
        setSchema(data.resolverString);
    })
    }, [])
  
  function NewlineText(props: any) {
      const text = props.text;
      return text.split('\n').map((str: string) => <p>{str}</p>);
  }

  return (
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
        <Button onClick={() => setResolver(false)}>Schema</Button>
        <Button onClick={() => setResolver(true)}>Resolvers</Button>
        <Button onClick={() => {navigator.clipboard.writeText((resolver) ?  schema : text)}}><ContentPasteIcon /></Button>
      </ButtonGroup>
      </Box>
      <Box style={{backgroundColor: 'rgb(245, 234, 234)', margin:'0% 1% 0% 3%', width: '100%', height: '89%', maxHeight:'89%', overflow: "scroll", padding: "30px 0px 0px 20px"}}>
        <NewlineText text={((resolver) ?  schema : text)} />
      {/* <Highlighter content={(resolver) ?  schema : text} language={'javascript'}> </Highlighter> */}
      </Box>
    </div>
  </Paper>
  </ThemeProvider>
 )
}