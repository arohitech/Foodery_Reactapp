import React from 'react'
import './placeorder.css'

const PlaceOrder = () => {
  return (
   <form className='place-order'>
    <div className="place-order-left">
      <p className='title'>Dilivery information </p>
      <div className="multi-fields">
        <input type="text" placeholder='first name' />
        <input type="text" placeholder='last name'/>
      </div>

      <div>
        <input type="email" placeholder='email' />
        <input type="text" placeholder='street'/>
      </div>
      

       <div className="multi-fields">
        <input type="text" placeholder='city' />
        <input type="text" placeholder='state'/>
      </div>

      <div className='multi-fields'>
        <input type="text" placeholder='zip-code' />
        <input type="text" placeholder='country'/>
      </div>

      <input type='text' placeholder='phone' />
      
      



      </div>
    <div className="place-order-right"></div>
   </form>
  )
}

export default PlaceOrder

