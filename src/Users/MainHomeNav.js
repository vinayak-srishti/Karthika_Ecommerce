import React from 'react'
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "./MainHomeNav.css";
import { Link } from "react-router-dom";

function MainHomeNav() {
  return (
    <div>
         <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>
            <Link to={"/"} className="link_deco">
              Mindful Menu
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text className="me-3 ">
              <Link to={"Userregistration"} className="link_deco">
                {" "}
                Sign UP{" "}
              </Link>
            </Navbar.Text>
            <Navbar.Text className="me-3">
              <Link to={"/Userlogin"} className="link_deco">
                {" "}
                Log In{" "}
              </Link>
            </Navbar.Text>
            <Navbar.Text className="me-3">
              <Link to={"/contactus"} className="link_deco">
                Contact Us
              </Link>
            </Navbar.Text>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default MainHomeNav