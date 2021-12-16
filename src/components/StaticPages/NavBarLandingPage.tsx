import React from 'react';
import {Link, Navigate} from 'react-router-dom';
// import styles from '../../styles/LandingPage.module.scss';

function NavBarLandingPage() {
  return (
    <div className='navBar' >
      <button className='neon-button' type="button" onClick={() =>
          window.open('https://github.com/oslabs-beta/mariposa')
        }
      >
        Documentation
      </button>
      <button className='neon-button'type="button">
        <Link to="/about" className="linkStyler" > The Team </Link>
      </button>
    </div>
  );
}

export default NavBarLandingPage;
