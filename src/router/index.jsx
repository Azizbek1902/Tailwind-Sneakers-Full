import React from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Routes, Route } from 'react-router-dom'
import Sneakers from '../views/Sneakers'
import Home from '../views/Home'
import Bag from '../views/Bag'
import Belt from '../views/Belt'
import Contact from '../views/Contact'

function Router() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/bag' element={<Sneakers />}/>
        <Route path='/snak' element={<Bag />}/>
        <Route path='/belt' element={<Belt />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default Router;