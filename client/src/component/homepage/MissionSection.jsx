import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import blueberry from "../../../public/images/blueberryheart.png";
import cows from "../../../public/images/cowsunset.png";

import veggies from "../../../public/images/localveggies.png";
import styles from './Homepage.module.css';

class MissionSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <div className={styles.carouselContainerMission} >
          <Carousel style={{width: "100%", height: "600px"}}>

            <Carousel.Item className={styles.carouselImageA}>


            </Carousel.Item>

            <Carousel.Item className={styles.carouselImageB}>


            </Carousel.Item>

            <Carousel.Item className={styles.carouselImageC}>


            </Carousel.Item>


            <Carousel.Item className={styles.carouselImageD}>

            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    );
  }
}


export default MissionSection;