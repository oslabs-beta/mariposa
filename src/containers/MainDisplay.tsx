import React, { useState } from 'react';
import LandingPage from '../components/landingPage.tsx';
import EntryUri from '../components/EntryUri.tsx'


export const MainDisplay = () => {
//conditional rendering for entering a URI 
const [uriBoolean, setUriBoolean] = useState(false)
//hold the string for the URI
const [uriString, setUriString] = useState('')

return (
  <div>
  {(uriBoolean) ? <LandingPage setUriBoolean={setUriBoolean} uriString={uriString} setUriString={setUriString}/> : <EntryUri setUriBoolean={setUriBoolean} setUriString={setUriString}/>}
  </div>

  )
}
