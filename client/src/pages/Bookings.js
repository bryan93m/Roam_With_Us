import React from 'react'
import BookingComponent from '../components/BookingComponent'

const Bookings = ({booking, deleteBooking}) => {
  const bookings = booking.map(booking => <BookingComponent key={booking.id} booking={booking} deleteBook={deleteBooking}/>)
  return (
    <div>
      {bookings}
      <button>Check Out</button>
    </div>
  )
}

export default Bookings