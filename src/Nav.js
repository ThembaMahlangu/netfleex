import React, { useEffect, useState } from 'react'
import './Nav.css';

function Nav() {
    const [show, handleShow] = useState(false);

    const transitionNavBar = () => {
        if (window.scrollY > 100) { 
            handleShow(true);
        } else {
            handleShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener("scroll", transitionNavBar);
    }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
        <div className='nav_contents'>
            <img className='nav_logo'
            src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png'
            alt='netflix logo'/>

            <img className='nav_avatar' 
            src='https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/gdruy0cnkgnaadpxiadi' 
            alt='avatar of user'/>
        </div>
    </div>
  )
}

export default Nav