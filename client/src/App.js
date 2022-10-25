import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Homepage from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Destinations from './pages/Destinations'
import Bookings from './pages/Bookings'
import About from './pages/About'

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  )
}

export default App
