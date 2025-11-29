import React, { useState } from 'react'
import './cart.css'
import { useContext } from 'react'
import { StoreContext } from '../../context/storecontext'
import { Link, useNavigate } from 'react-router-dom'
import { food_list } from '../../assets/assets.js'
const Cart = () => {


  const {Cartitems , food_list , removeFromCart,gettotalcartItems} = useContext(StoreContext);
  const navigate = useNavigate();
  const cart = Cartitems;

  const cartdata = food_list.filter((item) => cart[item._id]>0);
    
  return (
    <div className='cart' id='cart'>
      <div className="cart-items">
        <div className="cart-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
     <br>
     </br>
     <hr></hr>

     {cartdata.length === 0 ?(
      <p className='empty'>Your cart is empty</p>
     ) : (
       cartdata.map((item) => {
         return (
          <>
           <div className="cart-title  cart-item" key={item._id}>
            <img src={item.image} alt="" />
           <p>{item.name}</p>
           <p>${item.price}</p>
           <p>{cart[item._id]}</p>
           <p>${item.price * cart[item._id]}</p>
           <button onClick={() => removeFromCart(item._id)}>Remove</button>
         </div>
         <hr />
         </>
         )
        })
     )}
     <div className="cart-bottom">
      <div className="cart-total">
        <h2>Cart total</h2>
        <div>
        <div className="cart-total-details">
          <p>Subtotal</p>
          <p>${gettotalcartItems()}</p>
        </div>
        <hr />
        <div className="cart-total-details">
          <p>Dilivery fee</p>
          <p>${2}</p>
        </div>
        <hr />
        <div className="cart-total-details">
          <b>Total</b>
          <b>${gettotalcartItems()+2}</b>
        </div>
        </div>
        <button onClick={()=>navigate("/order")} className='checkout'>PROCEED TO CHECKOUT</button>
      </div>
      <div className="cart-promocode">
        <div>
          <p>if you have promocode , enter it here</p>
          <div className='cart-promocode-input'>
            <input type='text' placeholder='promocode'/>
            <button>Submit</button>
            
          </div>
        </div>
      </div>
     </div>


  </div>
  </div>
    )
}
      

export default Cart

