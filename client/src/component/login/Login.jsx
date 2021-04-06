import React from 'react';
import LoginButton from './LoginButton.jsx';
import LogoutButton from './LogoutButton.jsx';
import { useAuth0 } from "@auth0/auth0-react";

const Login = (props) => {
  const { user, isLoading, isAuthenticated } = useAuth0()
  return (
      <div>
        { !isAuthenticated && <LoginButton /> }
        { isAuthenticated && <LogoutButton /> }
      </div>
  )
}

export default Login;