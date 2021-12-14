import React, { useState} from 'react';
import { useInput } from '@mui/base';
import { styled } from '@mui/system';
import Button from '@mui/material/Button';

const StyledInputElement = styled('input')`
  width: 200px;
  font-size: 1rem;
  font-family: IBM Plex Sans, sans-serif;
  font-weight: 400;
  line-height: 1.4375em;
  background: rgb(243, 246, 249);
  border: 1px solid #e5e8ec;
  border-radius: 10px;
  padding: 6px 10px;
  color: #20262d;
  transition: width 300ms ease;

  &:hover {
    background: #eaeef3;
    border-color: #e5e8ec;
  }

  &:focus {
    outline: none;
    width: 220px;
    transition: width 200ms ease-out;
  }
`;



const CustomInput = React.forwardRef(function CustomInput(
  props: React.InputHTMLAttributes<HTMLInputElement>,
  ref: React.ForwardedRef<HTMLInputElement>,
) {
  const { getRootProps, getInputProps } = useInput(props, ref);

  return (
    <div {...getRootProps()}>
      <StyledInputElement {...props} {...getInputProps()}  />
    </div>
  );
});

export default function UseInput() {
  const [uri, setUri] = useState('');
  const handleClick = () => {
    fetch('/project/D3tables', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ uri: uri})
    })
  }
  return <div style={{display: 'inline-block'}}><CustomInput placeholder="URI input..." onChange={(e) => setUri(e.target.value)}/><Button style={{float: 'inline-end', display: 'inline-block'}} onClick={handleClick}>Submit</Button></div>;
}