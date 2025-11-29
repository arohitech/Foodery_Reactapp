import React from 'react'
import './footer.css'
import {assets} from '../../assets/assets.js'

const Footer = () => {
  return (
    <div className="footer" id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Your go-to app for delicious meals delivered fast and fresh to your doorstep.</p>
                <div className="footer-social-icon">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Delivery</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+1 234-567-8907</li>
                    <li>info@foodapp.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">
            &copy; 2025 FoodApp. All rights reserved.
        </p>
    </div>
  )
}


export default Footer
