import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import Ashley from "../../../public/images/Farmer-Ashley.jpeg";
import Dan from "../../../public/images/Farmer-dan.jpeg";
import John from "../../../public/images/Farmer-John-.jpeg";
import Olu from "../../../public/images/FarmerOlu.jpeg";
import styles from "./Homepage.module.css";

class HeroSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className={styles.farmerCarousel}>
          <Carousel style={{ width: "100%", height: "500px" }}>
            <Carousel.Item className={styles.carouselImage2A}></Carousel.Item>

            <Carousel.Item className={styles.carouselImage2B}></Carousel.Item>

            <Carousel.Item className={styles.carouselImage2C}></Carousel.Item>

            <Carousel.Item className={styles.carouselImage2D}></Carousel.Item>
          </Carousel>
        </div>
      </div>
    );
  }
}

export default HeroSection;
