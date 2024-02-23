import React from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import "./AddProduct.css";
import AdminNav from "./AdminNav";
import { useState } from "react";
import axiosinstance from "../axiosurl";

function AddProduct() {
  const [form, setForm] = useState({
    Pname: "",
    Pid: "ID",
    Pdescription: "",
    Price: "",
    Pimage: null,
  });
  const submitForm = (e) => {
    e.preventDefault();
    setForm((prevdata) => {
      return {
        ...prevdata,
        [e.target.name]: e.target.value,
      };
    });
  };
  console.log(form);
  const submitImage = (e) => {
    e.preventDefault();
    setForm({
      ...form,
      Pimage: e.target.files[0],
    });
  };

  const saveProduct = (e) => {
    let formdata = new FormData();
    for (let i in form) {
      formdata.append(i, form[i]);
    }
    axiosinstance.post("/addproduct", formdata)
    .then((res) => {
      setForm({
        Pname: "",
        Pid: "ID",
        Pdescription: "",
        Price: "",
        Pimage: null,
      });
      alert(res.data.message);
    });
try {
  
} catch (error) {
  console.log(error);
alert("Could not add product. Please try again")
}


//     .catch((err)=>{
// console.log(err);
// alert("Could not add product. Please try again")
//     })
  };

  return (
    <div className="product_page">
      <AdminNav />

      <Form onSubmit={saveProduct}>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextName">
          <Form.Label column sm="2">
            Product Name
          </Form.Label>
          <Col sm="10">
            <Form.Control plaintext name="Pname" onChange={submitForm} />
          </Col>
        </Form.Group>

        <Form.Group
          as={Row}
          className="mb-3"
          controlId="formPlaintextProductId"
        >
          <Form.Label column sm="2">
            Product ID
          </Form.Label>
          <Col sm="10">
            <Form.Control
              placeholder="Poduct Id"
              name="Pid"
              onChange={submitForm}
            />
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          className="mb-3"
          controlId="formPlaintextDescription"
        >
          <Form.Label column sm="2">
            Product Description
          </Form.Label>
          <Col sm="10">
            <Form.Control
              placeholder="Product Description"
              name="Pdescription"
              onChange={submitForm}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPrice">
          <Form.Label column sm="2">
            Price per Kg
          </Form.Label>
          <Col sm="10">
            <Form.Control
              placeholder="Price"
              name="Price"
              onChange={submitForm}
            />
          </Col>
        </Form.Group>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Add Product Image</Form.Label>
          <Form.Control type="file" onChange={submitImage} name="Pimage" />
          <Button className="ms-5 mt-5 ">Add Product </Button>
        </Form.Group>
      </Form>
    </div>
  );
}

export default AddProduct;
