import React from 'react';
import { NavLink, Switch, Route, BrowserRouter as Router, Redirect } from 'react-router-dom';
import HomePage from './homepage/HomePage.jsx'
import FarmersMarket from './marketplace/FarmersMarket.jsx'
import UserProfile from './userinfo/UserProfile.jsx';
import RecipeGen from './homepage/RecipeGen.jsx';
import Login from './login/Login.jsx';
import { useAuth0 } from "@auth0/auth0-react";
import Navigation from './homepage/Navigation.jsx';
import Profile from './login/Profile.jsx';
import ProtectedRoute from './login/ProtectedRoute.jsx';
import Loader from './login/Loader.jsx';

 const Main = () => {

  const { user, isAuthenticated, isLoading } = useAuth0()

  if (isLoading) {
    return (
        <div className="container h-100">
          <div className="row h-100 justify-content-center align-items-center">
              <Loader />
          </div>
        </div>
    )
  }

  return (
    <Router>
        <Navigation />
        <Switch>
          <Route path='/marketplace' component={FarmersMarket}></Route>
          {/* <Route path='/userprofile' render={() => <UserProfile userEmail={user.email} />}></Route> */}
          <ProtectedRoute path='/userprofile' component={Profile} />
          <Route path='/login' component={Login}></Route>
          <Route path='/RecipeGenerator' component={RecipeGen}></Route>
          <Route path='/' component={HomePage}></Route>
        </Switch>
    </Router>
  )

};

export default Main;