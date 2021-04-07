import React from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import styled from 'styled-components';
import Logo from "../../../public/images/HealthyFoodLogo.jpeg";

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  position: static;
`;

const LeftHeader = styled.div`
  justify-content: flex-start;
`;

const RightHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;


const ImageHead = styled.img`
  height: 100px;
`;

const Navigation = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <Header className="header">
    <LeftHeader className="header-left">
    <NavLink src={Logo} exact to='/' activeStyle={{fontWeight: "bold"}}> <ImageHead src={Logo}></ImageHead></NavLink>
    <NavLink exact to='/marketplace' activeStyle={{fontWeight: "bold"}} style={{margin: "5px"}}>Marketplace</NavLink>
    <NavLink exact to='/RecipeGenerator' activeStyle={{fontWeight: "bold"}} style={{margin: "5px"}}>RecipeGenerator</NavLink>
    </LeftHeader>
    <RightHeader className="header-right">
    <NavLink exact to='/UserProfileA'activeStyle={{fontWeight: "bold"}} style={{margin: "5px"}}>Bypass Authentication</NavLink>
    <NavLink exact to='/login' activeStyle={{fontWeight: "bold"}} style={{margin: "5px"}}>Login</NavLink>
    <NavLink exact to='/userprofile' activeStyle={{fontWeight: "bold"}} style={{margin: "5px"}}>Profile</NavLink>
    </RightHeader>
  </Header>
  )
};

export default Navigation;