import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./Payment.css"
import { Link } from 'react-router-dom';


function Payment() {
    const PaymentButton=()=>{
        alert("Payment Successful !")
    }
  return (
    <div className='payment_page'>
         <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Payment</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Card Number : </p>
          <p>Card Holder Name : </p>
          <p>Card Expiry Date : </p>
          <p>Card CVV : </p>
          <p>Total Amount : </p>
        </Modal.Body>

        <Modal.Footer>
        <Link to={'/shoppingcart'}>
          <Button variant="secondary">Cancel</Button>
          </Link>
          <Button variant="primary" onClick={PaymentButton}>Pay Now</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
    </div>
  )
}

export default Payment
