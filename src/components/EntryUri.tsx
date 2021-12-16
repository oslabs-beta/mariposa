import React, {useState} from 'react';
import {Link, Navigate} from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

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
    <div className='entryUri'> 
      <TextField label={'URI Input....'} id="URI" onChange={(e) => setUri(e.target.value)}/>
      <Button onClick={handleClickCustom}>Submit</Button>
      <Button onClick={handleClickSample}>Sample Data</Button>
    </div>

 )
}

export default EntryUri;

