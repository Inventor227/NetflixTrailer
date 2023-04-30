import React, { useState,useEffect } from 'react'
import './Nav.css'
function Nav() {
    const [show, handleShow]=useState(false);
    useEffect(()=>{
    window.addEventListener("scroll",()=>
    {
        if(window.scrollY>100)
        {
            handleShow(true);
        }
        else handleShow(false);

    });
    return ()=>{
        window.removeEventListener("scroll",null);
    };
    },[]
    );
  return (
    <div className={`nav ${show && "nav-red"}`} >
      <img className='nav-logo'
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png?20190206123158" alt="NETFLIX LOGO" />
      <img className='nav-avatar'
      src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117" alt="NETFLIX AVATAR" />
    </div>
  )
}

export default Nav
