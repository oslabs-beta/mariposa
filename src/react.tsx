import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './scss/styles.scss';
import LandingPage from './components/landingPage.tsx';
import LoginForm from './components/LoginForm.tsx';
import EntryUri from './components/EntryUri.tsx'

const adminUser = {  
  email: "m@c",
  password: "c"
}

export default function App() {
  // state for the user 
//const [user, setUser] = useState({ name: "", email: "", isLoggedIn: false });
// error message
//const [error, setError] = useState("");
//conditional rendering for graphiql
const [graphiql, setGraphiql] = useState(false)
//conditional rendering for entering a URI 
const [uriBoolean, setUriBoolean] = useState(false)
//hold the string for the URI
const [uriString, setUriString] = useState('')

  return (
    <div> 
    {(uriBoolean) ? <LandingPage graphiql={graphiql} setGraphiql={setGraphiql} setUriString={setUriString}/> : <EntryUri uriBoolean={uriBoolean} setUriBoolean={setUriBoolean} setUriString={setUriString}/>}
    </div>

 )
}

const mainElement = document.createElement('div');
ReactDOM.render(<App />, mainElement);

