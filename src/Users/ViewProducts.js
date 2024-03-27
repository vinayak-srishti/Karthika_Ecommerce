import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import UserNav from "./UserNav";
import "./ViewProducts.css";
import Form from "react-bootstrap/Form";
import UserFooter from "./UserFooter";
import axiosinstance from "../axiosurl";
import { useNavigate } from "react-router-dom";

function ViewProducts() {
  const [productlist, setProductlist] = useState([]);

  useEffect(() => {
    axiosinstance
      .get("/viewproducts")
      .then((res) => {
        setProductlist(res.data.values);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(productlist);
  }, []);

const handleCart = (id)=>{
console.log(id);
axiosinstance.post("/shoppingcart")
.then((res)=>{
  
})
}
const Navigate = useNavigate()
useEffect(()=>{
  if(localStorage.getItem("User")!==null){
    Navigate("/Viewproducts")
  }
  else{
Navigate("/")
  }
})
  return (
    <div className="productpage">
      <UserNav />
      <Container>
        <div>
          <Row>
            <Col></Col>
            <Col>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  className="me-2 mt-3"
                  aria-label="Search"
                />
                <Button variant="outline-success" className="me-5 mt-3">
                  Search
                </Button>
              </Form>
            </Col>
            <Col></Col>
          </Row>
        </div>

        <Row>
          {productlist.map((item, index) => (
            <Col key={index}>
              {" "}
              <Card style={{ width: "18rem", height: "25rem" }} className="mt-5 ms-5">
                <Card.Img
                  variant="top"
                  src={`http://localhost:4000/upload/${item.Pimage.originalname}`}
                />
                <Card.Body>
                  <Card.Title>{item.Pname}</Card.Title>
                  <Card.Text>
                    <div>
                      <p>Category : {item.Pdescription}</p>
                      <p>Price : {item.Price} Rs Per KG</p>
                    </div>
                  </Card.Text>

                  <Button variant="primary" onClick={()=>{handleCart(item._id)}}>Add to Cart</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <div>
        <UserFooter />
      </div>
    </div>
  );
}

export default ViewProducts;

{
  /* <Col>
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
    </Card></Col> */
}
