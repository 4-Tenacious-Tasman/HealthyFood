import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import Ashley from "../../../public/images/Farmer-Ashley.jpeg";
import Dan from "../../../public/images/Farmer-dan.jpeg";
import John from "../../../public/images/Farmer-John-.jpeg";
import Olu from "../../../public/images/FarmerOlu.jpeg";
import styles from './Homepage.module.css';


class HeroSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row-title" style={{ marginBottom: "20px", marginLeft: "20%", marginRight: "20%", marginTop: "20px" }}>
            <div style={{border: "5px #2da77d solid", background: "rgb(240, 161, 138)", textAlign: "center", color: "white"}}>
              Meet Your Local Farmers
            </div>
          </div>
        </div>
        <div className="container-fluid" style={{display: "flex", justifyContent: "center", width: "1000px"}}>
          <Carousel >
            <Carousel.Item className={styles.farmerCarousel} >
              <img
                style={{ height: "500px", borderRadius: "5px", width: "100%" }}
                className="d-block w-100"
                src={Ashley}
              />

              <Carousel.Caption>
                <h3>Farmer Ashley </h3>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item className={styles.farmerCarousel}>
              <img
                style={{ height: "500px", borderRadius: "5px" }}
                className="d-block w-100"
                src={Olu}
              />

              <Carousel.Caption>
                <h3>Farmer Olu</h3>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item className={styles.farmerCarousel}>
              <img
                style={{ height: "500px", borderRadius: "5px" }}
                className="d-block w-100"
                src={John}
              />

              <Carousel.Caption>
                <h3>Farmer John</h3>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item className={styles.farmerCarousel}>
              <img
                style={{ height: "500px", borderRadius: "5px" }}
                className="d-block w-100"
                src={Dan}
              />

              <Carousel.Caption>
                <h3>Farmer Dan</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    );
  }
}

export default HeroSection;
