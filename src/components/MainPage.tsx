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
  return (
 
      
   <div className="mainDisplayContainer">
     
      <ResponsiveAppBar uriBtnClose = {uriBtnClose} setUriBoolean={props.setUriBoolean}></ResponsiveAppBar>
      {!uriBtnClose && <div className="uri-box">
        <form>
          <div className="enterUri">
      <h2 >Enter URI</h2>       
      <button onClick={()=>setHandleUriBtnClose(true)}><span>Exit</span></button>
      </div>
             <div className="form-group">
              <label htmlFor="uri">Enter URI</label>
              <input type="text" className='form-control'/>
            </div>
        </form>
     </div>
      }
      {!props.graphiql && (
        <div className="mainDisplayWrapper">
          <Graph uriString={props.uriString} />            
          <Resolvers uriString={props.uriString} />
        </div>)
      }
    </div>
  )
}