import React, { useState } from 'react';
import NavBarLandingPage from './NavBarLandingPage';
import {Link} from 'react-router-dom';
import { WebLoginForm } from '../formComponents/WebLoginForm'
import { WebRegisterForm } from '../formComponents/WebRegisterForm'
import MariposaLogo from '../../assets/MariposaLogo.svg';



function LandingPage() {
  const[hideNavBar, setHideNavBar] = useState(false);
  const[changeToFormDisplay, setChangeToFormDisplay] = useState(false);
  const[formToDisplay, setFormToDisplay] = useState('login');
  
  console.log('hideNavBar:', hideNavBar)
  console.log('changeToFormDisplay: ', changeToFormDisplay)
  console.log('formToDisplay: ', formToDisplay)

  const handleStartNow = () => {
    setChangeToFormDisplay(true);
    setHideNavBar(true);
  }  

  const handleBackButton = () => {
    setChangeToFormDisplay(false);
    setFormToDisplay('login');
    setHideNavBar(false);
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
    <div className='grid-container'>
       {
       !hideNavBar ? <NavBarLandingPage /> : 
      <div>
       <Link to='/'>
        <button
          className='neon-button'
          type="button" onClick = {handleBackButton}>Back
        </button>
       </Link>
			</div>
      }

        <div className={"leftWrapper"}>
          <img id ={"logo"} src={MariposaLogo} style={{ width: '100vh' }}/>
        </div>
        <div className={"rightWrapper"}>
          {
          !changeToFormDisplay && ( 
          <div>
              <h2>A Restful API to GraphQL Migration Tool</h2>
          <div className="buttonDiv">
            <button type='button' className='neon-button' onClick={handleStartNow}>
              Login
            </button>
            <button type='button' className='neon-button' onClick={guestLogin}>
              Free demo
            </button>
          </div>
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
