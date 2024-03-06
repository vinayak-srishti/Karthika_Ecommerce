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
    Pimage: "",
  });
  const changeData = (e) => {
    e.preventDefault();
    setForm((prevdata) => {
      return {
        ...prevdata,
        [e.target.name]: e.target.name==='Pimage' ? e.target.files[0]:e.target.value
        
      };
    });
  };
  console.log(form);
  // const addImage = (e) => {
    
  //   setForm({
  //     ...form,
  //     Pimage: e.target.files[0],
  //   });
  // };

  const handleSubmit = (e) => {
    e.preventDefault()
    let formdata = new FormData();
    for (let i in form) {
      formdata.append(i, form[i]);
    }
    console.log(formdata, "fd");
    formdata.append("Pimage", form.Pimage)
    console.log(formdata, "Appended");
    axiosinstance.post("/addproduct", formdata, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })

    .then((res) => {
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

      <Form >
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextName">
          <Form.Label column sm="2">
            Product Name
          </Form.Label>
          <Col sm="10">
            <Form.Control plaintext name="Pname" onChange={changeData} />
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
              onChange={changeData}
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
              onChange={changeData}
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
              onChange={changeData}
            />
          </Col>
        </Form.Group>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Add Product Image</Form.Label>
          <Form.Control type="file" onChange={changeData} name="Pimage" />
          <Button className="ms-5 mt-5 " onClick={handleSubmit}>Add Product </Button>
        </Form.Group>
      </Form>
    </div>
  );
}

export default AddProduct;
