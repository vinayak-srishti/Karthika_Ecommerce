import React from 'react'
import AdminNav from './AdminNav'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./ManageProducts.css"



function ManageProducts() {
  return (
    <div className='productpage'>
        <AdminNav/>
        <Container>
            <div>
            <Row>
        <Col></Col>
        <Col>
        <Button  href="/Addproduct" className='ms-5 mt-5 '>Add New Product </Button> 
        </Col>
        <Col></Col>
      </Row>
            
            </div>
      <Row>
        <Col> <Card style={{ width: '18rem' }} className='mt-5 ms-5'>
      <Card.Img variant="top" src="https://www.onionz.in/uploads/items/9fb80c512d324d53923898dc68e9d53f.jpg" />
      <Card.Body>
        <Card.Title>Bitter Gourd</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" className='ms-4'>Update</Button>
        <Button variant="primary" className='ms-4'>Delete</Button>
      </Card.Body>
    </Card></Col>
        <Col>
        <Card style={{ width: '18rem' }} className='mt-5 ms-5'>
      <Card.Img variant="top" src="https://www.eatrightbasket.com/wp-content/uploads/2019/03/Brinjal-small-round.jpg" />
      <Card.Body>
        <Card.Title>Brinjal</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" className='ms-4'>Update</Button>
        <Button variant="primary" className='ms-4'>Delete</Button>
      </Card.Body>
    </Card></Col>
        <Col> <Card style={{ width: '18rem' }} className='mt-5 ms-5'>
      <Card.Img variant="top" src="https://www.onionz.in/uploads/items/tomato1.jpg" />
      <Card.Body>
        <Card.Title>Tomato</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" className='ms-4'>Update</Button>
        <Button variant="primary" className='ms-4'>Delete</Button>
      </Card.Body>
    </Card></Col>
      </Row>
    </Container>
    </div>
  )
}

export default ManageProducts