import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Destinations from './pages/Destinations'
import Bookings from './pages/Bookings'
import About from './pages/About'
import SingleDestinationPage from './pages/SingleDestinationPage'
import NavBar from './components/NavBar'

const App = () => {

  const [destinations, setDestinations] = useState([])
  const [bookings, setBookings] = useState([])
  const [singleDestination, setSingleDestination] = useState([])
  const [user, setUser] = useState(false)

  useEffect(() => {
    axios.get('/destinations')
      .then(res => setDestinations(res.data))
  }, [])

  useEffect(() => {
    axios.get('/auth')
      .then(res => {
        updateUser(res.data)
      });
  }, [])

  const getSingleDestination = (id) => {
    axios.get(`/destinations/${id}`)
      .then(res => setSingleDestination(res.data))
  }
  
  const createBooking = (destinationId, optionId) =>{
    axios.post('/bookings', {destination_id: destinationId, option_id: parseInt(optionId)})
      .then(res => setBookings(res.data))
  }
  

  const updateUser = (user) => setUser(user)

  if(!user) return <Login updateUser={updateUser} />
  return (
    <>
      <NavBar updateUser={updateUser} />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path='/destination/:id' element={<SingleDestinationPage singleDestinations={singleDestination} createBooking={createBooking} />} />
        <Route path="/about" element={<About />} />
        <Route path="/destinations" element={<Destinations destinations={destinations} singleDestination={getSingleDestination}/>} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/login" element={<Login updateUser={updateUser}/>} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  )
}

export default App
