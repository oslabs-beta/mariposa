import React, {useState} from 'react';
import {Link, Navigate} from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const EntryUri = (props:any) => {
  const [uri, setUri] = useState('');
  
  const handleClickCustom = () => {
    fetch('/project/D3tables', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ uri: uri})
    })
  }

  const handleClickSample = () => {
    fetch('/project/D3tables', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ uri: uri})
    })
    .then(() =>{
      console.log('clicked', props);
      props.setUriBoolean(true)
    })
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