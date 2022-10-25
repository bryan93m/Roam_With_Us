import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Destination({ destination }) {

    const [toggle, setToggle] = useState(false);

    const { name, season, price, description, image_url } = destination

    const handleToggle = () => {
        setToggle(!toggle)
    }

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image_url} />
            <Card.Body>
                <Card.Title>Name: {name}</Card.Title>

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