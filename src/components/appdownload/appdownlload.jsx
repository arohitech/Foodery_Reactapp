import React from 'react'
import './appdownload.css'
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <div className="app-download" id="app-download">
     <h2>Download our app for the best food experience! <br /> Tomato App </h2>
     <div className="app-download-platforms">
        <img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt="" />
     </div>
    </div>
  )
}

export default AppDownload
