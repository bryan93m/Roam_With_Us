import React from "react";
import { useNavigate } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';


function Destination({ destination, singleDestination }) {
    let navigate = useNavigate();

    const { name, image_url } = destination

    const handleSingleDestination = () => {
        singleDestination(destination.id)
        navigate(`/destination/${destination.id}`)
    }

    return (
        <Container style={{ width: '18rem', justifyContent: 'center' }}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title onClick={handleSingleDestination} style={{ cursor: 'pointer' }} >Name: {name}</Card.Title>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default Destination;