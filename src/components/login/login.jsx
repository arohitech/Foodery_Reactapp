import React, { useState } from 'react'
import './login.css'
import { assets } from '../../assets/assets'

const Login = ({setshowLogin}) => {
  const [currState , setcurrState] =useState("login")
  return ( //when we press cross icon login page would close cuz setshowlogin = false
    <div className='loginpopup'>
      <form className='login-popup-container'>
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={() => setshowLogin(false)} src={assets.cross_icon} alt=''/> 

        </div>
        <div className="login-popup-inputs">
          {
            currState==="login"?<></>:  <input type='text' placeholder='your name' required />
          }
         
          <input type='email' placeholder='your email ' required />
           <input type='password' placeholder='your password ' required />

        </div>
        <button>{currState==="sign-up"?"create account":"login"}</button>
        <div className="login-popup-condition">
          <input type='checkbox' required />
          <p>by continuing, i agree to the terms of the use & privacy policy.</p>
        </div>
        {
          currState==="login"?<p>create a new account?<span onClick={() => setcurrState("sign-up")} >click here</span></p>
          : <p>Already have an account?<span onClick={()=> setcurrState("login")} >login here</span></p>

        }
       
      </form>
    </div>
  )
}

export default Login
