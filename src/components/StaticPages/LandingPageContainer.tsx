import React, { useState } from 'react';
// import styles from '../../styles/LandingPage.scss'
import NavBarLandingPage from './NavBarLandingPage';
import { WebLoginForm } from '../formComponents/WebLoginForm'
import { WebRegisterForm } from '../formComponents/WebRegisterForm'


function LandingPage() {
  
  const[changeToFormDisplay, setChangeToFormDisplay] = useState(false);
  const[formToDisplay, setFormToDisplay] = useState('login');

  const handleStartNow = () => {
    setChangeToFormDisplay(true);
  }  
  function guestLogin() {
    fetch('/api/userLogin', {
      method: 'POST',
      body: JSON.stringify({ username: 'guest', password: 'password' }),
    }).then((response) => {
      if (response.status === 200) {
        router.replace('/dashboard');
      }
    });
  }
  console.log(formToDisplay)


  return (
    <div className={"LandingPageWrapper"}>
      <NavBarLandingPage />
      <div className={"leftLandingPageWrapper"}>

      </div>
      <h1 id={"logo"}>Mariposa</h1>
      <div className={"rightLandingPageWrapper"}>
        {!changeToFormDisplay && ( 
          <div>
        <button type='button' onClick={handleStartNow}>
          Start now
        </button>
        <button type='button' onClick={guestLogin}>
        Free demo
      </button>
      </div>
        )}
         {((changeToFormDisplay && 
          formToDisplay === 'login') && (<WebLoginForm setFormToDisplay = {setFormToDisplay}/>)) ||
          ((changeToFormDisplay && 
          formToDisplay === 'register') && (<WebRegisterForm setFormToDisplay = {setFormToDisplay}/>))}
         
        
      </div>
    </div>
  );
}

export default LandingPage;
