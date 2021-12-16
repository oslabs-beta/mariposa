import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Graph from './graph';
import ResponsiveAppBar from './navbar';
import Resolvers from './Resolvers';
import Sandbox from './sandbox';

// style={{
//   border: "solid",
//   minWidth: "100%",
//   height: "100vh",
// }}

//add the conditional rendering right under the Grid

export default function LandingPage(props: any) {
  const[uriBtnClose, setHandleUriBtnClose] = useState(false);
  const [uriString, setUriString] = useState('');
  const [uri, setUri] = useState('');

  console.log('latest string', uriString)
  console.log('here', uri)
  return (
    
   <div className="mainDisplayContainer">
     
      <ResponsiveAppBar uriBtnClose ={uriBtnClose} setHandleUriBtnClose ={setHandleUriBtnClose} setUriBoolean={props.setUriBoolean}></ResponsiveAppBar>
      {!uriBtnClose && <div className="uri-box">
        <form onSubmit={ () => setUriString(uri)}>
          
          <div className="enterUri">
            <h2 >Enter URI</h2>       
            <button onClick={()=>setHandleUriBtnClose(true)}><span>Close</span></button>
          </div>
          
          <div className="form-group">
            <label htmlFor="uri">URI:</label>
            <input type="text" className='form-control' onChange={(e) => setUri(e.target.value)}/>
          </div>
          <button type="submit" id="submitBtn">Submit</button>
        
        </form>
     </div>
      }
      {!props.graphiql && (
        <div className="mainDisplayWrapper">
          <Graph uriString={uriString} />            
          <Resolvers uriString={uriString} />
        </div>)
      }
    </div>
  )
}