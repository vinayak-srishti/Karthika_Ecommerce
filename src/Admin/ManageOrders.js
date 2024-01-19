import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import AdminNav from './AdminNav'
import "./ManageOrders.css"
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/Col';

function ManageOrders() {
  return (
    <div className='Order_Page'>
         <AdminNav/>
         <Container/>
         <Row>
            <Col>
         <Card style={{ width: '18rem' }} className='mt-5 ms-5'>
      <Card.Body>
        <Card.Title>User 1</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Order details</Card.Subtitle>
        <Card.Text>
          Ordered 5 Products <br/><br/>
          Address : TC 21, Palayam, Trivandrum
        </Card.Text>
        <Card.Link href="#">View detailed order</Card.Link><br/><br/>
        <Button variant="primary" className='ms-4'>Accept</Button>
        <Button variant="primary" className='ms-4'>Cancel</Button>
      </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card style={{ width: '18rem' }} className='mt-5 ms-5'>
      <Card.Body>
        <Card.Title>User 2</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Order details</Card.Subtitle>
        <Card.Text>
          Ordered 7 Products <br/><br/>
          Address : TC 38, Pattom, Trivandrum
        </Card.Text>
        <Card.Link href="#">View detailed order</Card.Link><br/><br/>
        <Button variant="primary" className='ms-4'>Accept</Button>
        <Button variant="primary" className='ms-4'>Cancel</Button>
      </Card.Body>
      </Card>
    </Col>
    <Col>
    <Card style={{ width: '18rem' }} className='mt-5 ms-5'>
      <Card.Body>
        <Card.Title>User 3</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Order details</Card.Subtitle>
        <Card.Text>
          Ordered 2 Products <br/><br/>
          Address : TC 25, PMG, Trivandrum
        </Card.Text>
        <Card.Link href="#">View detailed order</Card.Link><br/><br/>
        <Button variant="primary" className='ms-4'>Accept</Button>
        <Button variant="primary" className='ms-4'>Cancel</Button>
      </Card.Body>
      </Card>
    </Col>
    </Row>
    </div>
  )
}

export default ManageOrders