import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'

import Home from './components/Home/Home'
import Cart from './components/Cart/Cart'
import PlaceOrder from './components/PlaceOrder/PlaceOrder'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer/Footer'

const App = () => {
  const [showLogin,setShowLogin] = useState(false)
   


  return (


    <>
 {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
    
    <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
       <Route path='/' element={<Home/>} />
       <Route path='Cart' element={<Cart/>} />
       <Route path='/PlaceOrder' element={<PlaceOrder/>} />
      </Routes>
    </div>
    <Footer/>
    </>
    
  )
}

export default App

