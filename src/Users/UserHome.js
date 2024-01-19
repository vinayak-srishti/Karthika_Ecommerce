import React from "react";
import UserNav from "./UserNav";
import Carousel from 'react-bootstrap/Carousel';

import image1 from "../Asset/carousel.png";
import image2 from "../Asset/carousel1.jpg";
import image3 from "../Asset/carousel2.jpg";
import "./UserHome.css";
import { Link } from "react-router-dom";

function UserHome() {
  return (
    <div className="userhome">
      <UserNav />
      <Carousel>
      <Carousel.Item>
        <img src={image1} alt="no image" id="img1" />
        <Carousel.Caption>
          <h3>Mindful Menu</h3>
          <p>Welcome to Mindful Menu, where we cultivate a commitment to your
well-being through a bountiful selection of organic vegetables, fruites
and grains. Our journey sprouted from a passion for wholesome living and
a dedication to providing you with the freshest, pesticide-free produce.
At Mindful Menu, we believe in the inherent goodness of organic farming
practices. Our farmers, deeply rooted in sustainable agriculture,
cultivate nutrient-rich vegetables that not only taste better but also
contribute to a healthier lifestyle. Explore our virtual aisles to
discover a vibrant array of organic food, carefully curated for your
culinary delight. Join us in sowing the seeds of a healthier future.
Shop at Mindful Menu – where organic goodness meets your plate.</p>
<Link to={"/Viewproducts"} className='link_deco'> View our Products </Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        < img src={image2} alt="no image" id="img2" />
        <Carousel.Caption>
          <h3>Mindful Menu</h3>
          <p>At Mindful Menu, we believe in the inherent goodness of organic farming
practices.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={image3} alt="no image" id="img3" />
        <Carousel.Caption>
          <h3>Mindful Menu</h3>
          <p>
          Join us in sowing the seeds of a healthier future.
          
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>






     
      {/* <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={image1} class="d-block w-100" id="img1" alt="noimage" />
          </div>
          <div class="carousel-item">
            <img src={image2} class="d-block w-100" id="img2" alt="noimage" />
          </div>
          <div class="carousel-item">
            <img src={image3} class="d-block w-100" id="img3" alt="noimage" />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div> */}
    </div>
  );
}

export default UserHome;


{/* <p>
Welcome to Mindful Menu, where we cultivate a commitment to your
well-being through a bountiful selection of organic vegetables, fruites
and grains. Our journey sprouted from a passion for wholesome living and
a dedication to providing you with the freshest, pesticide-free produce.
At Mindful Menu, we believe in the inherent goodness of organic farming
practices. Our farmers, deeply rooted in sustainable agriculture,
cultivate nutrient-rich vegetables that not only taste better but also
contribute to a healthier lifestyle. Explore our virtual aisles to
discover a vibrant array of organic food, carefully curated for your
culinary delight. Join us in sowing the seeds of a healthier future.
Shop at Mindful Menu – where organic goodness meets your plate.
</p> */}
