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
  const [uriBtnClose, setHandleUriBtnClose] = useState(false);
  const [uriString, setUriString] = useState('');
  const [treeData, setTreeData] = useState({
    name: '',
    children: [],
  })

  const [text, setText] = useState('');
  const [schema, setSchema] = useState('');

  function obtainTreeData(uriString: string) {
    fetch('/project/D3tables', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ uri: uriString })
    })
      .then(res => res.json())
      .then(data => {
        setTreeData(data)
      })
  }

  function obtainResolvers(uriString: string) {
    fetch('/project/tables', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ uri: uriString })
    })
      .then(res => res.json())
      .then(data => {
        setText(data.typeDefs);
        setSchema(data.resolverString);
      })
  }

  const handleClick = (uriString: string, e:any) => {
      e.preventDefault()
      setHandleUriBtnClose(true); //closes uri box
      setUriString(''); //cleans uri bar
      obtainResolvers(uriString);
      obtainTreeData(uriString);
      console.log(text, schema, treeData)
  }

  console.log('latest string', uriString)
  return (

    <div className="mainDisplayContainer">

      <ResponsiveAppBar uriBtnClose={uriBtnClose} setHandleUriBtnClose={setHandleUriBtnClose} setUriBoolean={props.setUriBoolean}></ResponsiveAppBar>
      {!uriBtnClose && <div className="uri-box">
        <form onSubmit={(e) => handleClick(uriString, e)}>

          <div className="enterUri">
            <h2 >Enter URI</h2>
            <button onClick={() => setHandleUriBtnClose(true)}><span>Close</span></button>
          </div>

          <div className="form-group">
            <label htmlFor="uri">URI:</label>
            <input type="text" className='form-control' onChange={(e) => setUriString(e.target.value)} />
          </div>
          <button type="submit" id="submitBtn">Submit</button>

        </form>
      </div>
      }
      {!props.graphiql && (
        <div className="mainDisplayWrapper">
          <Graph treeData={treeData} />
          <Resolvers text={text} schema={schema} />
        </div>)
      }
    </div>
  )
}