import React from 'react'
import {useState} from 'react'
import './navbar.css'
import {assets} from '../../assets/assets.js'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom'
import Menubar from '../menubar/menubar.jsx'
const Navbar = ({menu,setshowLogin , setmenu}) => {
    
  return (
    <div className='navbar' id='home'>

      <Link to="/"><img src={assets.logo} className='logo' alt="Logo" /></Link>

    <div className="links">
        <ul className= 'nav-menu'>
          <Link to="/"><li >Home</li></Link>
          <li><a href='#food-display'>Menu</a></li>
          <li><a href='#app-download'>Mobile App</a></li>
          <li >Contact us</li>
        </ul>
    </div>


      <div className='navbar-right'>
        <img src={assets.search_icon} className='search-icon' alt="Search" />
          <div className="navbar-search-icon">
            <Link to="/cart"><img  className='basket-icon' src={assets.basket_icon}  alt="Cart" /></Link>
            <div className='dot'></div>
          </div>
          <button onClick={() => setshowLogin(true)} className='login-btn'>Signin</button>
          <a onClick ={() => setmenu(true)}  className='icon'><i className='fa-solid fa-bars'></i></a>
      </div>
    </div>
  )
}

export default Navbar
