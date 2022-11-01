import React, { useState } from "react";
import axios from 'axios'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';


const DisplayAllBookings = ({ singleBooking, deleteBooking, updateBooking }) => {
    const { id, destination, option } = singleBooking

    const [toggle, setToggle] = useState(false);
    const [selectOption, setSelectOption] = useState(0);
    const [singleDestination, setSingleDestination] = useState([])


    function handleDelete() {
        deleteBooking(id)
    }

    const handleToggle = () => {
        setToggle(!toggle)
        axios.get(`/api/destinations/${destination.id}`)
            .then(res => setSingleDestination(res.data))
    }

    function handleClick() {
        updateBooking(id, destination.id, selectOption)
    }

    const handleChange = (e) => {
        setSelectOption(e.target.value)
    }



    if (!destination) return <h1 className='Emptybook'>Come On Book Something, Roam With Us Baby</h1>


    return (
        <>
            <Container style={{ width: '18rem', justifyContent: 'center' }}>
                <Card style={{ width: '18rem' }}>
                    <span onClick={handleDelete} style={{ cursor: 'pointer', textAlign: 'left', paddingLeft: '10px', paddingTop: '5px', color: '#3CC2F5' }}>remove</span>
                    <Card.Body>
                        <Card.Title>{destination.name}</Card.Title>
                        <div>
                            <Card.Text>{option.name}</Card.Text>
                            <Card.Text>{destination.price + option.price}</Card.Text>
                        </div>
                    </Card.Body>

                    {
                        toggle ?
                            <div>
                                <span onClick={handleToggle} style={{ cursor: 'pointer', textAlign: 'right', paddingLeft: '10px', paddingTop: '5px', color: '#3CC2F5' }}>update booking</span>
                                <select onChange={handleChange} value={selectOption}>
                                    <option value={0}>choose option</option>
                                    {singleDestination.options?.map(option => <option value={option.id} key={option.id}>{`${option.name}, price:(${option.price})`}</option>)}
                                </select>
                                <Button variant="primary" onClick={handleClick}>Update</Button>
                            </div>
                            :
                            <div>
                                <span onClick={handleToggle} style={{ cursor: 'pointer', textAlign: 'right', paddingLeft: '10px', paddingTop: '5px', color: '#3CC2F5' }}>update booking</span>
                            </div>
                    }

                </Card>
            </Container>
        </>
    )
}

export default DisplayAllBookings