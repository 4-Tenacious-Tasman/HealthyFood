import React from 'react';
import styled from 'styled-components';
import HeroSection from './HeroSection.jsx';
import MissionSection from './MissionSection.jsx';
import Logo from "../../../public/images/HealthyFoodLogo.jpeg";

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LeftHeader = styled.div`
  justify-content: flex-start;
`;

const RightHeader = styled.div`
  display: flex;
  justify-content: flex-end;
`;


const ImageHead = styled.img`
  height: 100px;
`;

const Button = styled.button`
  height: 30px;
  margin: auto;
  margin-left: 5px;
  border-radius: 15px;
  background: salmon;

  &:hover{
    background-color: grey;
    transition: all ease 0.5s;
  }
`;

const ButtonRoute = styled.button`
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;

  &:hover {
    font-weight: bold;
  }
`;


const Box = styled.div`
  border: 5px solid black;
  border-radius: 15px;
  height: 100px;
  width: 250px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;


class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <Header className="header">

          <LeftHeader className="header-left">
            <ImageHead src={Logo}></ImageHead>
            <ButtonRoute>Local Market</ButtonRoute>
            <ButtonRoute>Recipe Generator</ButtonRoute>
          </LeftHeader>

          <RightHeader className="header-right">
              <Button>Login</Button>
              <Button>Signup</Button>
          </RightHeader>

        </Header>

        <div className="mission/values">
          <MissionSection />
          {/* <button>Look at Subscription plans here!</button> */}
        </div>


        <div className="plan-box">
          <Box>
              <div className="top options">

              </div>

              <div className="bottom options">

              </div>
          </Box>
        </div>


        <div className="hero-section">
        <HeroSection/>
        </div>



          <div>
            <h3>footer</h3>
          </div>






      </div>
    )
  }
}

export default HomePage;