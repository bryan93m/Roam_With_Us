import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';



const SingleDestinationPage = ({ singleDestinations, createBooking }) => {
  const [selectOption, setSelectOption] = useState(0)

  const { name, season, price, description, image_url, options } = singleDestinations

  const handleChange = (e) => {
    setSelectOption(e.target.value)
    console.log(selectOption)
  }

  function handleClick() {
    createBooking(singleDestinations.id, selectOption)
  }

  return (
    <Container style={{ width: '50rem', justifyContent: 'center' }}>
      <Card style={{ width: '50rem' }}>
        <Card.Img variant="top" src={image_url} alt={name} />
        <Card.Body>
          <Card.Title >Name: {name}</Card.Title>
          <Card.Text>Season: {season}</Card.Text>
          <Card.Text>Price: {price}</Card.Text>
          <Card.Text>Description: {description}</Card.Text>

          <select onChange={handleChange} value={selectOption}>
            <option value={0}>choose option</option>
            {options?.map(option => <option value={option.id} key={option.id}>{`${option.name}, price:(${option.price})`}</option>)}
          </select>
          <Button variant="primary" onClick={handleClick}>Book</Button>
        </Card.Body>
      </Card>

    </Container>
  )
}

export default SingleDestinationPage