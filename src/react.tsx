import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './scss/styles.scss';
import LandingPage from './components/landingPage.tsx';
import LoginForm from './components/LoginForm.tsx';

const adminUser = {  
  email: "m@c",
  password: "c"
}

export default function App() {
  // state for the user 
const [user, setUser] = useState({ name: "", email: "", isLoggedIn: false });
// error message
const [error, setError] = useState("");
//conditional rendering for graphiql
const [graphiql, setGraphiql] = useState(false)


const Login = (details: { email: string; password: string; name: any; }) => {
  console.log(details);
  if (details.email == adminUser.email && details.password == adminUser.password) {
  console.log("Logged In");
  setUser({
      name: details.name,
      email: details.email,
      isLoggedIn: true
  });
} else {
  console.log("wrong details")
  setError("wrong details")
}
}  

// reset the state on logout
const Logout = () => {
  //console.log("logout");
  setUser({name: "", email: "", isLoggedIn: false});
}


  return (
    <div> 
    {(user.isLoggedIn === false) ? <LandingPage graphiql={graphiql} setGraphiql={setGraphiql}/> : <LoginForm Login={Login} error={error}/>}
    </div>

 )
}

const mainElement = document.createElement('div');
document.body.appendChild(mainElement);

ReactDOM.render(<App />, mainElement);

