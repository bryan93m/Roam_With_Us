import React from 'react'
import DisplayAllBookings from './DisplayAllBookings'


const Bookings = ({ bookings, deleteBooking, updateBooking }) => {

  function handleDelete(id) {
    deleteBooking(id)
  }

  function handleUpdate(id, destinationId, optionId) {
    updateBooking(id, destinationId, optionId)
  }

  if (bookings.length === 0) return <h1 className='Emptybook'>Come On Book Something, Roam With Us Baby</h1>

  return (
    <>
      {bookings.map(singleBooking => <DisplayAllBookings key={singleBooking.id} singleBooking={singleBooking} deleteBooking={handleDelete} updateBooking={handleUpdate} />)}
    </>
  )
}

export default Bookings