import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoNotifications } from "react-icons/io5";
import { CgLogOff } from "react-icons/cg";
import { IoMdPerson } from "react-icons/io";
import "./UserNav.css";

function UserNav() {

  const handleLogout=()=>{
    localStorage.removeItem("User")
  }

  return (
    <div>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>
            <Link to={"/Userhome"} className="link_deco">
              Mindful Menu
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text className="me-3 ">
              <Link to={"/Userhome"} className="link_deco">
                {" "}
                Home{" "}
              </Link>
            </Navbar.Text>
            <Navbar.Text className="me-3">
              <Link to={"/Viewproducts"} className="link_deco">
                {" "}
                Products{" "}
              </Link>
            </Navbar.Text>
            <Navbar.Text className="me-3">
              <Link to={"/contactus"} className="link_deco">
                Contact Us
              </Link>
            </Navbar.Text>
            <Navbar.Text className="me-3">
              <Link to={"/Notification"} className="link_deco">
                <IoNotifications />
              </Link>
            </Navbar.Text>

            <Navbar.Text className="me-3">
              <Link to={"/shoppingcart"} className="link_deco">
                <FaShoppingCart />
              </Link>
            </Navbar.Text>
            <Navbar.Text className="me-5">
              <Link to={"/userprofile"} className="link_deco">
                <IoMdPerson />
              </Link>
            </Navbar.Text>
            <Navbar.Text>
              <i class="bi bi-bell-fill"></i>
            </Navbar.Text>
            <Navbar.Text>
              <CgLogOff onClick={handleLogout}/>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default UserNav;

{
  /* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success" className='me-5'>Search</Button>
          </Form> */
}
