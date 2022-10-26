import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Destination({ destination, singleDestination }) {
    const [toggle, setToggle] = useState(false);
    let navigate = useNavigate();

    const { name, season, price, description, image_url } = destination

    const handleToggle = () => {
        setToggle(!toggle)
    }

    const handleSingleDestination = () => {
        singleDestination(destination.id)
        navigate(`/destination/${destination.id}`)
    }



    
    
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image_url} />
            <Card.Body>
                <Card.Title onClick={handleSingleDestination} >Name: {name}</Card.Title>

                <div>
                    {
                        toggle ?
                            <div>
                                <Button variant="primary" onClick={handleToggle}>Hide Details</Button>
                                <Card.Text>Description: {description}</Card.Text>
                                <Card.Text>Season: {season}</Card.Text>
                                <Card.Text>Price: {price}</Card.Text>
                            </div>
                            :
                            <div>
                                <Button variant="primary" onClick={handleToggle}>Show Details</Button>
                            </div>
                    }
                </div>
            </Card.Body>
        </Card>
    )
}

export default Destination;