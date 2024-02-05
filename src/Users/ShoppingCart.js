import React from 'react'
import "./ShoppingCart.css"
import UserNav from './UserNav';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ShoppingCart() {
  return (
    <div className='cart_page'>
        <UserNav/>
        <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Dialog>
        <Modal.Header >
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Remove Item</Button>
          
        </Modal.Footer>
      </Modal.Dialog>
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Remove Item</Button>
          
        </Modal.Footer>
      </Modal.Dialog>
      <Modal.Dialog>
        <Modal.Header >
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Remove Item</Button>
          
        </Modal.Footer>
      </Modal.Dialog>

        <Modal.Footer>
          <Button variant="secondary">Remove</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>


    </div>
  )
}

export default ShoppingCart