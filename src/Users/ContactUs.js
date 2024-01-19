import React from "react";
import "./ContactUs.css";
import UserNav from "./UserNav";
import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function ContactUs() {
  return (
    <div className="Contact_container">
      <UserNav />
      <Container>
        <Row>
          <Col></Col>
          <Col>
      <Form className="mt-5">
      <Form.Group className="mb-3" >
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email"  />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Contact Number</Form.Label>
        <Form.Control type="number"  />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Let us know your concerns </Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Button className=" mt-3" variant="primary" type="submit">
          Submit
        </Button>
    </Form>
    </Col>
    <Col></Col>
    </Row>
  </Container>
    </div>
  );
}

export default ContactUs;




{/* <h3 className="ms-5 mt-5"></h3>
        <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Contact Us at</Card.Title>
        
        <Card.Text>
        Address: Mindful Menu, 5th Street, Trivandrum, Kerala <br />
            <br />
            Email: info@mindfulmenu.com <br />
            <br />
            Phone: 0471 232252 <br />
            <br />
            Customer Support Hours:<br/> Monday to Friday 9:00AM - 7:00PM <br />
            <br />
            
        </Card.Text>
        <Card.Subtitle className="mb-2 text-muted">Feel free to reach out with any inquiries, feedback, or assistance.
        </Card.Subtitle>
        </Card.Body>
    </Card> */}
