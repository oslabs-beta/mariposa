import React from 'react';
import {Link, Navigate} from 'react-router-dom';
// import styles from '../../styles/LandingPage.module.scss';

function NavBarLandingPage() {
  return (
    <div className='navBar' >
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
       {/* <Paper elevation={2} color='transparent' style={{
        border: "gray",
        minWidth: "100%",
        height: "100%",
        maxHeight: '97vh',
        position: 'relative',
        
      }}> */}
      <button className='neon-button'type="button">
        <Link to="/about" className="linkStyler" > The Team </Link>
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
