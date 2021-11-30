// import React, { useState } from 'react';
// import LoginForm from './LoginForm';  
// import Login.css from './Login.css';




// function App() {
//     // sample user data
//     const adminUser = {  
//         email: "mark@codesmith.com",
//         password: "code"
//     }
//     // state for the user 
//     const [user, setUser] = useState({ name: "", email: "", isLoggedIn: false });
//     // error message
//     const [error, setError] = useState("");
   
//     // login method for the user's info
//     const Login = details => {
//         console.log(details);
//         if (details.email == adminUser.email && details.password == adminUser.password) {
//         console.log("Logged In");
//         setUser({
//             name: details.name,
//             email: details.email,
//             isLoggedIn: true
//         });
//     } else {
//         console.log("wrong details")
//         setError("wrong details")
//       }
//     }  

//     // reset the state on logout
//     const Logout = () => {
//         //console.log("logout");
//         setUser({name: "", email: "", isLoggedIn: false});
//     } 


//     return (
//         <div className="loginApp">
//             {/* needs conditonal rendering logic here */}
//             {(user.isLoggedIn === true) ? (
//                 <div className="welcome">
//                     <h2>Welcome, <span>{user.name}</span></h2>
//                     <button onClick={Logout}>Logout</button>
//                 </div>
//             ) : (
//                 <LoginForm Login={Login} error={error}/>
//             )}
//         </div>

//             );
//         }


//     export default App;

  