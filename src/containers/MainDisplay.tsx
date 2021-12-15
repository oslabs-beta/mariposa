import React, { useState } from 'react';
import LandingPage from '../components/landingPage.tsx';
import EntryUri from '../components/EntryUri.tsx'


export const MainDisplay = () => {
  const [graphiql, setGraphiql] = useState(false)
//conditional rendering for entering a URI 
const [uriBoolean, setUriBoolean] = useState(false)
//hold the string for the URI
const [uriString, setUriString] = useState('')

return (
  <div>
  {(uriBoolean) ? <LandingPage uriString={uriString} setUriString={setUriString}/> : <EntryUri uriBoolean={uriBoolean} setUriBoolean={setUriBoolean} setUriString={setUriString}/>}
  </div>

  )
}
