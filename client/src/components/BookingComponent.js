import React from 'react'

const BookingComponent = ({booking}) => {
    const {name, price} = booking.destination
    const {name: optionName, price: optionPrice} = booking.option
  return (
    <div>
        <h1>{name}</h1>
        <h3>{optionName}</h3>
        <p>{price + optionPrice}</p>
    </div>
  )
}

export default BookingComponent