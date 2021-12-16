import React, { useState } from 'react';
import MainPage from '../components/MainPage.tsx';
import EntryUri from '../components/EntryUri.tsx'


export const MainDisplay = () => {
//conditional rendering for entering a URI 
const [uriBoolean, setUriBoolean] = useState(false)
//hold the string for the URI
const [uriString, setUriString] = useState('')

return (
  <div>
  {(uriBoolean) ? <MainPage setUriBoolean={setUriBoolean} uriString={uriString} setUriString={setUriString}/> : <EntryUri setUriBoolean={setUriBoolean} setUriString={setUriString}/>}
  </div>

  )
}
