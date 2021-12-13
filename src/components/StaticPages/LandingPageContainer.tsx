import React from 'react';
import styles from '../../styles/LandingPage.module.scss'
import NavBarLandingPage from './NavBarLandingPage';

function LandingPage() {
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
  
  return (
    <div className={styles.LandingPageWrapper}>
      <NavBarLandingPage />
      <div className={styles.leftLandingPageWrapper}>

      </div>
      <h1 id={styles.logo}>REVIS</h1>
      <div className={styles.rightLandingPageWrapper}>
        <button type='button' onClick={() => router.replace('/login')}>
          Start now
        </button>
        <button type='button' onClick={guestLogin}>
            Free demo
          </button>
      </div>
    </div>
  );
}

export default LandingPage;
