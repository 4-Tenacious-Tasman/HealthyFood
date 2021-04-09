import React from 'react';
import HeroSection from './HeroSection.jsx';
import MissionSection from './MissionSection.jsx';
import "bootstrap/dist/css/bootstrap.css";
import Sustain from "../../../public/images/eco_nuevo.png";
import MealPrep from "../../../public/images/mealpreplogo.png";
import Recipe from "../../../public/images/recipelogo.png";
import styles from './Homepage.module.css';


class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>

        <div className="mission/values" >
          <MissionSection />
        </div>

        <div className={styles.descriptionPageHome}>

            <div className={styles.Box}>
                <img src={MealPrep}></img>
                <div>
                  <h2>Customized Meal Plans</h2>
                  <p>We make customized meal plans compiled by your preferences of diet and nutritional needs.</p>
                </div>
            </div>

            <div className={styles.Box}>
                <div>
                  <h2>Recipe Generator</h2>
                  <p>We love spontaneity, and what better way to do something new then by using our free recipe generator to make a meal for anytime of the day!</p>
                </div>
                <img src={Recipe}></img>
            </div>

            <div className={styles.Box}>
              <img src={Sustain} style={{width: "400px", paddingRight: "45px"}}></img>
                <div>
                  <h2>Sustainability for All</h2>
                  <p>We are a homegrown company that runs on taking care of our customers, our local farms and most important, our planet.</p>
                </div>
            </div>

            </div>

        <div className="hero-section" style={{paddingBottom: "100px"}}>
        <HeroSection/>
        </div>



      </div>
    )
  }
}

export default HomePage;


// /* <Carousel style={{zIndex: "0"}}>
// <Carousel.Item>
//   <img
//     className="d-block w-100"
//     src={blueberry}
//     alt="First slide"
//     style={{maxHeight: "80vh"}}
//   />
// </Carousel.Item>
// <Carousel.Item>
//   <img
//     className="d-block w-100"
//     src={veggies}
//     alt="Second slide"
//     style={{maxHeight: "80vh"}}
//   />
// </Carousel.Item>
// <Carousel.Item>
//   <img
//     className="d-block w-100"
//     src={familyFarm}
//     alt="Third slide"
//     style={{maxHeight: "80vh"}}
//   />
// </Carousel.Item>
// <Carousel.Item>
//   <img
//     className="d-block w-100"
//     src={cows}
//     alt="Third slide"
//     style={{maxHeight: "80vh"}}
//   />
// </Carousel.Item>
// </Carousel> */


// .farmerCarousel{
//   height: 40vh;
//   width: 60vw;
//   max-height: 600px;
// }

// .farmerImage{
//   width: 100vh;
//   height: 100%;
// }


