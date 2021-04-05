import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import blueberry from "../../../public/images/blueberryheart.png";
import cows from "../../../public/images/cowsunset.png";
import familyFarm  from "../../../public/images/familyfarm.png";
import veggies from "../../../public/images/localveggies.png";
import styled from 'styled-components';

const Subscribe = styled.button`
  border-radius: 15px;
  background: salmon;
`;


class MissionSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="container-fluid" >
          <Carousel styled={{marginLeft: "auto"}}>
            <Carousel.Item style={{ height: "300px", width: "500px" }}>
              <img
                style={{ height: "300px" }}
                className="d-block w-100"
                src={veggies}
              />

            </Carousel.Item>

            <Carousel.Item style={{ height: "300px", width: "500px" }}>
            <img
                style={{ height: "300px" }}
                className="d-block w-100"
                src={blueberry}
              />


            </Carousel.Item>

            <Carousel.Item style={{ height: "300px", width: "500px" }}>
            <img
                style={{ height: "300px" }}
                className="d-block w-100"
                src={cows}
              />


            </Carousel.Item>


            <Carousel.Item style={{ height: "300px", width: "500px" }}>
              <img
                style={{ height: "300px" }}
                className="d-block w-100"
                src={familyFarm}
              />

              <Carousel.Caption>
                <Subscribe>Subscribe today!</Subscribe>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    );
  }
}

export default MissionSection;