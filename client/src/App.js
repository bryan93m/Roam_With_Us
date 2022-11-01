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
    axios.get('/api/destinations')
      .then(res => setDestinations(res.data))
  }, [])

  useEffect(() => {
    axios.get('/api/auth')
      .then(res => {
        updateUser(res.data)
      });
  }, [])



  const getSingleDestination = (id) => {
    axios.get(`/api/destinations/${id}`)
      .then(res => setSingleDestination(res.data))
  }

  const createBooking = async (destinationId, optionId) => {
    const resp = await axios.post('/api/bookings', { destination_id: destinationId, option_id: parseInt(optionId) });
    setBookings(bookings => [...bookings, resp.data])
  }

  useEffect(() => {
    axios.get('/api/bookings')
      .then(res => setBookings(res.data))
  }, [])

  const handleDelete = (id) => {
    axios.delete(`/api/bookings/${id}`)
      .then(res => setBookings(res.data))
  }

  const handleUpdate = async (id, destinationId, optionId) => {
    const resp = await axios.put(`/api/bookings/${id}`, { destination_id: destinationId, option_id: parseInt(optionId) });

    const updatedBookings = bookings.map((booking) =>
      booking.id === resp.data.id ? resp.data : booking
    );
    setBookings(updatedBookings)
  }

  const updateUser = (user) => setUser(user)

  return (
    <>
      <NavBar updateUser={updateUser} />
      <Routes>
        <Route path="/Homepage" element={<Homepage />} />
        <Route path='/destination/:id' element={<SingleDestinationPage singleDestinations={singleDestination} createBooking={createBooking} />} />
        <Route path="/about" element={<About />} />
        <Route path="/destinations" element={<Destinations destinations={destinations} singleDestination={getSingleDestination} />} />
        <Route path="/bookings" element={<Bookings bookings={bookings} deleteBooking={handleDelete} updateBooking={handleUpdate} />} />
        <Route exact path="/" element={<Login updateUser={updateUser} />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  )
}

export default App
