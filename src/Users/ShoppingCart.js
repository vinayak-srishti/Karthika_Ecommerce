import React from "react";
import "./ShoppingCart.css";
import UserNav from "./UserNav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

import UserFooter from "./UserFooter";
import Table from "react-bootstrap/Table";
import Payment from "./Payment";

function ShoppingCart() {

  

  return (
    <div className="cart_page">
      <UserNav />
      <Container>

        <Table striped bordered hover variant="dark" className="mt-5 ms-5">
          <thead>
            <tr>
              <th>Item</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {" "}
                <Card style={{ width: "10rem" }} className="mt-3 ms-5">
                  {/* <Card.Img
                variant="top"
                src="https://www.onionz.in/uploads/items/9fb80c512d324d53923898dc68e9d53f.jpg"
              /> */}
                  <Card.Body>
                    <Card.Title>Bitter Gourd</Card.Title>
                  </Card.Body>
                </Card>
              </td>
              <td>
                <ButtonGroup aria-label="Basic example" className="mt-3 ms-5">
                  <Button variant="secondary">-</Button>
                  <Button variant="secondary">+</Button>
                  <Button variant="primary" className="ms-5">
                    Remove
                  </Button>
                </ButtonGroup>
              </td>
            </tr>
            <tr>
              <td>
                <p>Total Amount </p>{" "}
              </td>
              <td>
                <Link to={"/Payment"}>
                <Button variant="primary" className="mt-5 ms-5" >
                  Proceed to payment
                </Button>
                </Link>
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
      <div>
        <UserFooter />
      </div>
    </div>
  );
}

export default ShoppingCart;
