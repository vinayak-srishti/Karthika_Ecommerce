import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import UserNav from './UserNav';
import "./ViewProducts.css"
import Form from 'react-bootstrap/Form';
import UserFooter from './UserFooter';


function ViewProducts() {
  return (
    <div className='productpage'>
        <UserNav/>
        <Container>
            <div>
            <Row>
        <Col></Col>
        <Col><Form className="d-flex">
            <Form.Control
              type="search"
              
              className="me-2 mt-3"
              aria-label="Search"
            />
            <Button variant="outline-success" className='me-5 mt-3'>Search</Button>
          </Form></Col>
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
        
        <Button variant="primary">Add to Cart</Button>
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
        <Button variant="primary">Add to Cart</Button>
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
        <Button variant="primary">Add to Cart</Button>
      </Card.Body>
    </Card></Col>
      </Row>
      </Container>
      <div >
        <UserFooter/>
      </div>
        </div> 
        
       
  )
}

export default ViewProducts