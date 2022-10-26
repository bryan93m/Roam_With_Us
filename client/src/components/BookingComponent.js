import React from 'react'
import axios from 'axios'

const BookingComponent = ({booking, deleteBook}) => {
    const {name, price} = booking.destination
    const {name: optionName, price: optionPrice} = booking.option

    function handleClick() {
        deleteBook(booking.id)
    }

  return (
    <div>
        <button onClick={handleClick}>X</button>
        <h1>{name}</h1>
        <h3>{optionName}</h3>
        <p>{price + optionPrice}</p>
    </div>
  )
}

export default BookingComponent