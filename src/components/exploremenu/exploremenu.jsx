import React from 'react'
import './exploremenu.css'
import { menu_list } from '../../assets/assets'
import AppDownload from '../appdownload/appdownlload'

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h2>Explore Our Menu</h2>
      <p className='explore-menu-text'>
        Discover a wide variety of dishes that cater to every taste and preference. From appetizers to desserts, we have something for everyone.
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item , index) => {
          return (
            <div onClick={() => setCategory(prev=> prev === item.menu_name ? "all" : item.menu_name)} className="menu-item" key={index}>
              <img src={item.menu_image} alt="" />
              <p>{item.menu_name}</p>
            </div>
          )
        })}
      </div>
      <hr />
      

    </div>
  )
}

export default ExploreMenu


