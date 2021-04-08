import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import blueberry from "../../../public/images/blueberryheart.png";
import cows from "../../../public/images/cowsunset.png";
import familyFarm  from "../../../public/images/familyfarm.png";
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
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={blueberry}
            alt="First slide"
            style={{maxHeight: "80vh"}}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={veggies}
            alt="Second slide"
            style={{maxHeight: "80vh"}}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={familyFarm}
            alt="Third slide"
            style={{maxHeight: "80vh"}}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={cows}
            alt="Third slide"
            style={{maxHeight: "80vh"}}
          />
        </Carousel.Item>
      </Carousel>
    );
  }
}


export default MissionSection;
