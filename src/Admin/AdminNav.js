import React from 'react'
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function AdminNav() {
  return (
    <div>
         <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"><Link to={"/Adminhome"} className='link_deco'>Mindful Menu</Link></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className='me-5'><Link to={"/Adminhome"} className='link_deco'>Home</Link>            
          </Navbar.Text>
          <Navbar.Text className='me-5'>
          <Link to={"/Manageproducts"} className='link_deco'>Manage Products</Link> 
            
          </Navbar.Text>
          <Navbar.Text className='me-5'>
          <Link to={'/Manageorders'} className='link_deco'> Manage Orders </Link> 
           
          </Navbar.Text>
          <Navbar.Text className='me-5'>
            Logout
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default AdminNav