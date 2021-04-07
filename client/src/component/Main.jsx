import React from 'react';
import { NavLink, Switch, Route, Redirect } from 'react-router-dom';
import HomePage from './homepage/HomePage.jsx'
import FarmersMarket from './marketplace/FarmersMarket.jsx'
import UserProfile from './userinfo/UserProfile.jsx';
import RecipeGen from './homepage/RecipeGen.jsx';
import Login from './login/Login.jsx';
import Profile from './login/Profile.jsx';
import { useAuth0 } from "@auth0/auth0-react";

 const Main = () => {

  const { user, isAuthenticated, isLoading } = useAuth0()

  return(
    <Switch>
      <Route exact path='/' component={HomePage}></Route>
      <Route exact path='/marketplace' component={FarmersMarket}></Route>
      <Route exact path='/userprofile' component={UserProfile}>{isAuthenticated ? <Redirect to='/userprofile' /> : <Redirect to='/login' />}</Route>
      <Route exact path='/login' component={Login}></Route>
      <Route exact path='/profile' component={Profile}></Route>
      <Route exact path='/RecipeGenerator' component={RecipeGen}></Route>
    </Switch>
  )
  };

export default Main;