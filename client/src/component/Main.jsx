import React from 'react';
import { NavLink, Switch, Route, BrowserRouter as Router, Redirect } from 'react-router-dom';
import HomePage from './homepage/HomePage.jsx'
import FarmersMarket from './marketplace/FarmersMarket.jsx'
import UserProfile from './userinfo/UserProfile.jsx';
import RecipeGen from './homepage/RecipeGen.jsx';
import Login from './login/Login.jsx';
import { useAuth0 } from "@auth0/auth0-react";

 const Main = () => {

  const { isAuthenticated } = useAuth0()

  return (
    <Router>
      <Switch>
        <Route path='/marketplace' component={FarmersMarket}></Route>
        <Route path='/userprofile' component={UserProfile}>{isAuthenticated ? <Redirect to='/userprofile' /> : <Redirect to='/login' />}</Route>
        <Route path='/login' component={Login}></Route>
        <Route path='/RecipeGenerator' component={RecipeGen}></Route>
        <Route path='/' component={HomePage}></Route>
      </Switch>
    </Router>
  )
};

export default Main;