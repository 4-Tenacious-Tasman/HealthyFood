import React from "react";
import { Route } from "react-router-dom";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import Login from './Login.jsx';

const ProtectedRoute = ({ component, ...args }) => (
  <Route
    component={withAuthenticationRequired(component, {
      onRedirecting: () => <Login />,
    })}
    {...args}
  />
);

export default ProtectedRoute;