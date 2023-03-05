import React from 'react';
import './LoginScreen.css';

function LoginScreen() {
  return (
    <div className='loginScreen'>
        <div className='loginScreen_background'>
            <img className='loginScreen_logo'
            src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'
            alt='netflix logo'/>
            <button className='loginScreen_button'>
                Sign In
            </button>
        </div>
    </div>
  )
}

export default LoginScreen