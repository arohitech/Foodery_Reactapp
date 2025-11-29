import React, { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/navbar'
import { Route ,Routes } from 'react-router-dom'
import Home from './pages/home/home.jsx'
import Footer from './components/footer/footer.jsx'
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import Cart from './pages/cart/cart.jsx'
import Login from './components/login/login.jsx'
import PlaceOrder from './pages/placeorder/placeorder.jsx'
import Menubar from './components/menubar/menubar.jsx'

const App = () => {
     const[showLogin, setshowLogin] = useState(false)
     const[menu,setmenu] = useState(false)
  return ( //if showlogin is true then open the login page other wise perform the oprations inside <></>
    <>
       {showLogin?<Login  setshowLogin={setshowLogin} />:<></>}
       {menu?<Menubar menu ={menu} setmenu={setmenu} setshowLogin={setshowLogin}/>:<></>}
      <div className='app'>
        <Navbar setshowLogin={setshowLogin} menu={menu} setmenu={setmenu}/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
          
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App