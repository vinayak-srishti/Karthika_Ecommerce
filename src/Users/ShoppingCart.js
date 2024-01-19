import React from 'react'
import "./ShoppingCart.css"
import UserNav from './UserNav';
import Table from 'react-bootstrap/Table';

function ShoppingCart() {
  return (
    <div className='cart_page'>
        <UserNav/>
         <Table striped bordered hover className='mt-5 ms-5 me-5'>
      <thead>
        <tr>
          <th>#</th>
          <th>Product Name</th>
          <th>Quantity(Kg)</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Tomato</td>
          <td>1</td>
          <td>28</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Bitter Gourd</td>
          <td>0.5</td>
          <td>30</td>
        </tr>
        <tr>
        <td>2</td>
          <td>Brinjal</td>
          <td>0.5</td>
          <td>33</td>
        </tr>
        <tr>
        <td>Total</td>
           <td colSpan={3}>91</td>
        </tr>
      </tbody>
    </Table>
    </div>
  )
}

export default ShoppingCart