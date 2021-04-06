import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import Ashley from "../../../public/images/Farmer-Ashley.jpeg";
import Dan from "../../../public/images/Farmer-dan.jpeg";
import John from "../../../public/images/Farmer-John-.jpeg";
import Olu from "../../../public/images/FarmerOlu.jpeg";


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
          <div className="row-title" style={{ marginBottom: "20px" }}>
            <div className="col-sm-12 btn btn-warning">
              Meet Your Local Farmers
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <Carousel>
            <Carousel.Item style={{ height: "300px", width: "500px" }}>
              <img
                style={{ height: "300px" }}
                className="d-block w-100"
                src={Ashley}
              />

              <Carousel.Caption>
                <h3>Farmer Ashley </h3>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item style={{ height: "300px", width: "500px" }}>
              <img
                style={{ height: "300px" }}
                className="d-block w-100"
                src={Olu}
              />

              <Carousel.Caption>
                <h3>Farmer Olu</h3>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item style={{ height: "300px", width: "500px" }}>
              <img
                style={{ height: "300px" }}
                className="d-block w-100"
                src={John}
              />

              <Carousel.Caption>
                <h3>Farmer John</h3>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item style={{height: "300px", width: "500px"}}>
              <img
                style={{ height: "300px" }}
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