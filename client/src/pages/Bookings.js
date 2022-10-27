import React from 'react'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';


const Bookings = ({booking, deleteBooking}) => {
  const {id, destination, option} = booking

 

  function handleDelete() {
    deleteBooking(id)
  }


  if(!destination) return <h1 className='Emptybook'>Come On Book Something, Roam With Us Baby</h1>

  
  return (
  <>
  <Container style={{ width: '18rem', justifyContent: 'center' }}>
    <Card style={{ width: '18rem'}}>
      <span onClick={handleDelete} style={{cursor:'pointer', textAlign:'left', paddingLeft:'10px', paddingTop:'5px', color:'#3CC2F5'}}>remove</span>
      <Card.Body>
        <Card.Title>{destination.name}</Card.Title>
        <div>
          <Card.Text>{option.name}</Card.Text>
          <Card.Text>{destination.price + option.price}</Card.Text>
        </div>
      </Card.Body>
    </Card>
    <button className='BookingBtn'>Check Out</button>
  </Container>
  </>
  )
}

export default Bookings