import React from 'react'
import './foodDisplay.css'
import { useContext } from 'react'
import { StoreContext } from '../../context/storecontext'
import {assets} from '../../assets/assets.js'
import { useState } from 'react'
import AppDownload from '../appdownload/appdownlload'

const FoodDisplay = ({category,setcategory,id,name,price,description,image}) => {
  const { food_list , addtoCart ,Cartitems,removeFromCart} = useContext(StoreContext);
 
  return (
    <div className='food-display' id='food-display'>
        <h2>Top dishes near you</h2>
        <div className="food-display-list">
          {food_list.map((Item , index) => {
            if(category==="all" || category===Item.category){ //if category is all then show all items but if category is item.category then showspecific items
              
            return(
            <div key={index} className="food-item">
                <div className="food-item-img-container">
                    <img className="food-item-img" src={Item.image} alt="" />
                    {!Cartitems[Item._id] //if itemcount is not 0 otherwise create div
                           ?<img  className = "add" onClick = {() =>addtoCart(Item._id) } src={assets.add_icon_white} alt="" />
                           : <div className="food-item-counter">   
                              <img onClick = {() => removeFromCart(Item._id)} src={assets.remove_icon_red} alt="" />
                              <p>{Cartitems[Item._id]}</p>
                              <img onClick ={() => addtoCart(Item._id)} src={assets.add_icon_green} alt="" />
                           </div>

                    }
                   
                </div>
                <div className="food-item-info">
                    <div className="food-item-name-rating">
                  <h3>{Item.name}</h3>
                  <img src={assets.rating_starts} alt="" />
                  </div>
                  <p className='food-item-description'>{Item.description}</p>
                  <span className='food-item-price'>${Item.price}</span>
                </div>
            </div>
            )
          }
          
          })}
        
          
        </div>
        <hr />
        <AppDownload />
      </div>
  )
}

export default FoodDisplay
