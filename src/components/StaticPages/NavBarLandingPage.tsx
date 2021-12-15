import React from 'react';
import {Link, Navigate} from 'react-router-dom';
// import styles from '../../styles/LandingPage.module.scss';

function NavBarLandingPage() {
  return (
    <div className={"NavBar"}>
      <button
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
        <Link to="/about"> The Team</Link>
      </button>
      <button
        id={"download"}
        type="button"
        onClick={() => router.replace('/download')}
      >
        Download
      </button>
    </div>
  );
}

export default NavBarLandingPage;
