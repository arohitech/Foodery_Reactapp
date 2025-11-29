import React from 'react'
import {useState} from 'react'
import "./menubar.css"
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const Menubar = ({menu ,setmenu , setshowLogin}) => {
  return (
   <div className="menu-bar">
    <div className="buttons">
        <img src={assets.logo} className="logo" alt="Logo" />
         <img className="close-btn" onClick={() => setmenu(false)} src={assets.cross_icon} alt=''/> 
    </div>
    <div className={menu?"links active": "links"}>
      <ul className="nav-menu">
          <li ><a href='#home'>Home</a></li>
          <li><a href='#food-display'>Menu</a></li>
          <li><a href='#app-download'>Mobile App</a></li>
          <li >Contact us</li>
          
          <button onClick={() => setshowLogin(true)} className="login-btn">Signin</button>
      </ul>
      </div>
      </div>
      
  )
}

export default Menubar
