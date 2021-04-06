import React from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import HomePage from './homepage/HomePage.jsx'
import FarmersMarket from './marketplace/FarmersMarket.jsx'
import UserProfile from './userinfo/UserProfile.jsx';
import RecipeGen from './homepage/RecipeGen.jsx';

 const Main = () => (
  <Switch>
    <Route exact path='/' component={HomePage}></Route>
    <Route exact path='/marketplace' component={FarmersMarket}></Route>
    <Route exact path='/userprofile' component={UserProfile}></Route>
    <Route exact path='/RecipeGenerator' component={RecipeGen}></Route>
  </Switch>
);

export default Main;