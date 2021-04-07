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
      <div>
        <div className={styles.carouselContainerMission} >
          <Carousel style={{width: "100%"}}>

            <Carousel.Item className={styles.innerCarousel}>
              <img
                style={{ height: "500px", borderRadius: "5px" }}
                className="d-block w-100"
                src={veggies}
              />
              <Carousel.Caption>
                <p>Sourced from local farmers</p>
              </Carousel.Caption>

            </Carousel.Item>

            <Carousel.Item className={styles.innerCarousel}>
            <img
                style={{ height: "500px", borderRadius: "5px" }}
                className="d-block w-100"
                src={blueberry}
              />
              <Carousel.Caption>
                <p>GMO free, organic, fresh fruits and vegetables</p>
              </Carousel.Caption>


            </Carousel.Item>

            <Carousel.Item className={styles.innerCarousel}>
            <img
                style={{ height: "500px" }}
                className="d-block w-100"
                src={cows}
              />
              <Carousel.Caption>
                <p>Happy Cows come from HealthyFood</p>
              </Carousel.Caption>


            </Carousel.Item>


            <Carousel.Item className={styles.innerCarousel}>
              <img
                style={{ height: "500px" }}
                className="d-block w-100"
                src={familyFarm}
              />
              <Carousel.Caption>
                <p>Let us all work together to make a better future!</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    );
  }
}


export default MissionSection;