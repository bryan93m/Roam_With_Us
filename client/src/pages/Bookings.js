import React from 'react'
import BookingComponent from '../components/BookingComponent'

const Bookings = ({booking}) => {
  const bookings = booking.map(booking => <BookingComponent key={booking.id} booking={booking}/>)
  return (
    <div>
      {bookings}
    </div>
  )
}

export default Bookings