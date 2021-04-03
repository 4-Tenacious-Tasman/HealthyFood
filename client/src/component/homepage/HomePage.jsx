import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from './Carousel.jsx';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <div className="header">

          <div className="header-left">

          </div>

          <div className="header-right">

          </div>

        </div>


        <div className="plan-box">

        </div>


        <div className="hero-section">
        <Carousel />
        </div>









      </div>
    )
  }
}

export default HomePage;