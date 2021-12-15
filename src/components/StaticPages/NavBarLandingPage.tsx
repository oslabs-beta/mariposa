import React from 'react';
import {Link, Navigate} from 'react-router-dom';
// import styles from '../../styles/LandingPage.module.scss';

function NavBarLandingPage() {
  return (
    <div className='navWrapper' >
      <button className='neon-button'
        type="button"
        onClick={() =>
          window.open(
            'https://github.com/oslabs-beta/mariposa'
          )
        }
      >
        Documentation
      </button>
      <button type="button">
        <Link to="/about" className='neon-button' > The Team </Link>
      </button>
      <button className='neon-button'
        type="button"
        onClick={() => router.replace('/download')}
      >
        Download
      </button>
    </div>
  );
}

export default NavBarLandingPage;
