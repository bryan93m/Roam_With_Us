import React from 'react'
import Card from 'react-bootstrap/Card';
import leela from "./images/leela.jpg"
import bryan from "./images/Bryan.jpg"
import Container from 'react-bootstrap/Container';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const About = () => {
  return (
    <>
      <Container >
        <h3>Roam With Us is a travel agency app where the user has the oppurtunity to choose from our two seasons,four packages and also add optional activity with an additional price.</h3>
        <Row>
          <Col md={4}>
            <Card style={{ width: '20rem' }}>
              <Card.Img variant="top" src={bryan} />
              <Card.Body>
                <Card.Title >Bryan Meadows</Card.Title>
                <Card.Link href="https://www.linkedin.com/in/bryan-c-meadows/"><FaLinkedinIn /></Card.Link>
                <Card.Link href="https://github.com/bryan93m"><FaGithub /></Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col md={{ span: 4, offset: 4 }}>
            <Card style={{ width: '20rem' }}>
              <Card.Img variant="top" src={leela} style={{ height: '20rem' }} />
              <Card.Body>
                <Card.Title>Leela Khadka</Card.Title>
                <Card.Link href="https://www.linkedin.com/in/leela-khadka-a363a224a/"><FaLinkedinIn /></Card.Link>
                <Card.Link href="https://github.com/leelakhadka"><FaGithub /></Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default About