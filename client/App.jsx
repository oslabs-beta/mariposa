import React, { useState, useEffect } from 'react';
import Board from './components/Board.jsx';
import Playlist_Selector from './components/Playlist_Selector.jsx';
import Customizer from './components/Customizer.jsx';

import './stylesheets/styles.scss';

function App() {
  // holds all the sounds in a playlist
  const [allSounds, setAllSounds] = useState([]);
  // holds all the playlists
  const [preset, setPreset] = useState('');
  // STATE FOR CONDITIONAL RENDERING BOARD VS MENU
  const [menuStatus, setMenuStatus] = useState(false);
  // holds list of playlists 
  const [playlists, setPlaylists] = useState([]);
  // conditional for showing login form
  const [showLogin, setShowLogin] = useState(false);
  // Saving username and password in States
  const [currUser, setCurrUser] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setStatus] = useState(false);
  const [currPL, setPL] = useState([]);
  const [loginFailed, setLoginErr] = useState(false);

  // account settings - sign up, log in, log out
  const postSignUp = () => {
    fetch('/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ allInfo: { username: currUser, password: password } })
      //const { username, password } = req.body.allInfo;
    })
      .then(res => {
        setCurrUser(currUser);
      })
      .catch(err => {
        console.log('Error sign up', err);
      });
  };

  const postLogIn = () => {
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ userInfo: { username: currUser, password: password } })
    })
      .then(res => res.json())
      .then(data => {
        setCurrUser(currUser);
        setAllSounds(data);
        setShowLogin(false);
        setStatus(true);
        setLoginErr(false);
        setPlaylists(Object.keys(data));
        setPL(data[(Object.keys(data)[0])].map(el => el.name));
      })
      .catch(err => {
        setLoginErr(true);
        console.log('Error logging in user', err);
      });
  };

  const logOut = () => {
    setCurrUser(null);
    setPreset('');
    setAllSounds([]);
    setPlaylists['default'];
    setStatus(false);
    setMenuStatus(false);
  };

  // render login form
  const loginForm =
    <div key="login" className="login-wrapper">
      <form>
        <div id="login-input">Username: <input onChange={e => setCurrUser(e.target.value)} type="text" required></input></div>
        <div id="login-input">Password: <input onChange={e => setPassword(e.target.value)} type="password" required></input></div>
        <div className="outer">
          <button className="login-button-click" onClick={e => { e.preventDefault(); postLogIn(); }}>Log In</button>
          <button className="login-button-click" onClick={postSignUp}>Sign Up</button>
        </div>
      </form>
    </div>;

  const selectedPL = (playlist) => {
    console.log(allSounds[playlist].map(el => el.name));
    setPL(allSounds[playlist].map(el => el.name));
  };

  return (
    //load user settings and render the board
    <div className="app-wrapper">
      {/* displays log in icon while user is not logged in */}
      {!loginStatus && <button id="login-form" onClick={() => setShowLogin(!showLogin)}></button>}

      {/* displays login form when button is pressed*/}
      {showLogin && loginForm}

      {/* if wrong username/password combination */}
      {loginFailed && <center><div style={{color:'red'}}>Wrong Username and Password combination - Please try again</div></center>}

      {/* displays gear for the settings when logged in */}
      {loginStatus && <button className="presetSettings" onClick={() => setMenuStatus(!menuStatus)}></button>}

      {/* displays customizer page when button is pressed */}
      {loginStatus && menuStatus && <Customizer currPL={currPL} currUser={currUser} setMenuStatus={setMenuStatus} allSounds={allSounds} setAllSounds={setAllSounds} setPlaylists={setPlaylists} />}

      {/* displays playlist slector when logged in */}
      {loginStatus && <Playlist_Selector selectedPL={selectedPL} playlists={playlists} setPreset={setPreset} />}

      {/* most important item - the sound board */}
      {menuStatus || <Board preset={preset} allSounds={allSounds} />}

      {/* displays logout icon when logged in */}
      {loginStatus && <button id="logout-button" onClick={logOut}></button>}
    </div>
  );
}

export default App;