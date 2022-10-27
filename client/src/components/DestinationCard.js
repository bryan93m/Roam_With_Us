import React from "react";
import { useNavigate } from 'react-router-dom'
import Card from 'react-bootstrap/Card';



function Destination({ destination, singleDestination }) {
    let navigate = useNavigate();

    const { name, image_url } = destination

    const handleSingleDestination = () => {
        singleDestination(destination.id)
        navigate(`/destination/${destination.id}`)
    }

    return (
        <div className="item">
            <Card className="DestinationCard" >
                <Card.Img variant="top" src={image_url} className='DestImg' onClick={handleSingleDestination} style={{ cursor: 'pointer' }}/>
                <Card.Body onClick={handleSingleDestination} style={{ cursor: 'pointer' }}>
                    <Card.Title   >Name: {name}</Card.Title>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Destination;