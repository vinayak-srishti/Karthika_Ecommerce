import React from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import "./AddProduct.css"
import AdminNav from './AdminNav';

function AddProduct() {
  return (
    <div className='product_page'>
        <AdminNav/>
         <Form>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextName">
        <Form.Label column sm="2">
          Product Name
        </Form.Label>
        <Col sm="10">
          <Form.Control plaintext />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextProductId">
        <Form.Label column sm="2">
          Product ID
        </Form.Label>
        <Col sm="10">
        <Form.Control placeholder="Poduct Id" />

        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextProductId">
        <Form.Label column sm="2">
          Price per Kg
        </Form.Label>
        <Col sm="10">
        <Form.Control placeholder="Price" />

        </Col>
      </Form.Group>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Add Product Image</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
    </Form>
    </div>
  )
}

export default AddProduct