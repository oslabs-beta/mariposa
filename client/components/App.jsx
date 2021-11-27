import React, { useState } from 'react';
import LoginForm from './LoginForm';  
import Login.css from './Login.css';




function App() {
    const adminUser = {  
        email: "mark.dolan3@gmail.com",
        password: "parsons21"
    }

    const [user, setUser] = useState({ name: "", email: "" });
    const [error, setError] = useState("");

    const Login = details => {
        console.log(details);
        if (details.email == adminUser.email && details.password == adminUser.password) {
        console.log("Logged In");
        setUser({
            name: details.name,
            email: details.email
        });
    } else {
        console.log("wrong details")
        setError("wrong details")
      }
    }  


    const Logout = () => {
        //console.log("logout");
        setUser({name: "", email: ""});
    } 

    return (
        <div className="App">
            {(user.email !== "") ? (
                <div className="welcome">
                    <h2>Welcome, <span>{user.name}</span></h2>
                    <button onClick={Logout  }>Logout</button>
                </div>
            ) : (
                <LoginForm Login={Login} error={error}/>
            )}



        </div>

            );
        }
    export default App;

  