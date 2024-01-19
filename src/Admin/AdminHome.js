import React from 'react'
import AdminNav from './AdminNav'
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import image1 from "../Asset/carousel.png";
import image2 from "../Asset/carousel1.jpg";
import image3 from "../Asset/carousel2.jpg";
import { Link } from "react-router-dom";
import "./AdminHome.css"


function AdminHome() {
  return (
    <div className='Admin_home'>
        <AdminNav/>
        <Container>
            
        <Carousel>
      <Carousel.Item>
        <img src={image1} alt="no image" id="img1" />
        <Carousel.Caption>
          <h3>Mindful Menu</h3>
          <p>Welcome Admin ! </p>
          <Link to={"/Manageproducts"} className='link_deco'> Manage Products </Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        < img src={image2} alt="no image" id="img2" />
        <Carousel.Caption>
          <h3>Mindful Menu</h3>
          <p>Welcome Admin !</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={image3} alt="no image" id="img3" />
        <Carousel.Caption>
          <h3>Mindful Menu</h3>
          <p>
          Welcome Admin !
          
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </Container>
    </div>
  )
}

export default AdminHome