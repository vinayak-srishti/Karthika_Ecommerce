import React from "react";
import UserNav from "./UserNav";
import Carousel from "react-bootstrap/Carousel";

import image1 from "../Asset/carousel.png";
import image2 from "../Asset/carousel1.jpg";
import image3 from "../Asset/carousel2.jpg";
import "./UserHome.css";
import { Link } from "react-router-dom";
import UserFooter from "./UserFooter";

function MainHome() {
  return (
    <div className="userhome"><UserNav />
    <Carousel>
      <Carousel.Item>
        <img src={image1} alt="no image" id="img1" />
        <Carousel.Caption>
          <h3>Mindful Menu</h3>
          <p>
            Welcome to Mindful Menu, where we cultivate a commitment to your
            well-being through a bountiful selection of organic vegetables,
            fruites and grains. Our journey sprouted from a passion for
            wholesome living and a dedication to providing you with the
            freshest, pesticide-free produce. At Mindful Menu, we believe in
            the inherent goodness of organic farming practices. Our farmers,
            deeply rooted in sustainable agriculture, cultivate nutrient-rich
            vegetables that not only taste better but also contribute to a
            healthier lifestyle. Explore our virtual aisles to discover a
            vibrant array of organic food, carefully curated for your culinary
            delight. Join us in sowing the seeds of a healthier future. Shop
            at Mindful Menu – where organic goodness meets your plate.
          </p>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={image2} alt="no image" id="img2" />
        <Carousel.Caption>
          <h3>Mindful Menu</h3>
          <p>
            At Mindful Menu, we believe in the inherent goodness of organic
            farming practices.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={image3} alt="no image" id="img3" />
        <Carousel.Caption>
          <h3>Mindful Menu</h3>
          <p>Join us in sowing the seeds of a healthier future.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    <div>
      <UserFooter />
    </div>
</div>
  )
}

export default MainHome