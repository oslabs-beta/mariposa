import React, {useState} from 'react';
import {Link, Navigate} from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Logo from '../assets/MariposaLogo.png'

const EntryUri = (props:any) => {
  const [uri, setUri] = useState('');
  
  const handleClickCustom = () => {
    props.setUriString(uri);
    props.setUriBoolean(true);
  }

  const handleClickSample = () => {
    props.setUriBoolean(true);
    props.setUriString();
  }

 return (
    <Paper elevation={2} color='transparent' style={{
      border: "gray",
      minWidth: "10%",
      width: '36%',
      maxHeight: '97vh',
      position: 'relative',
      backgroundColor: 'pink',
      opacity: '0.9',
      padding: '.7%',
      marginLeft: 'auto', 
      marginRight: 'auto',
    }}>
      <TextField label={'URI Input....'} id="URI" onChange={(e) => setUri(e.target.value)}/>
      <Button onClick={handleClickCustom}>Submit</Button>
      <Button onClick={handleClickSample}>Sample Data</Button>
    </Paper>

 )
}

export default EntryUri;

