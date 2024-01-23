import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './page/Home'
import Shop from './page/Shop'
import Cart from './Cart'
import { CartProvider } from 'react-use-cart'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <CartProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      </CartProvider>
      </BrowserRouter>
    </div>
  )
}

export default App