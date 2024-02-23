import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import UserNav from "./UserNav";
import "./UserProfile.css";
import UserFooter from './UserFooter';
import Form from "react-bootstrap/Form";

function userProfile() {
  return (
    <div className="user_page">
<UserNav />
      <Container>
              <Row>
          <Col></Col>
          <Col>
            <Card style={{ width: "25rem", height:"25rem" }} className="mt-5 ms-5">
              <Card.Body>
                <Card.Title>User Profile</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Edit Profile</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col> </Col>
        </Row>
      </Container>
      <div >
        <UserFooter/>
      </div>
    </div>
  )
}

export default userProfile