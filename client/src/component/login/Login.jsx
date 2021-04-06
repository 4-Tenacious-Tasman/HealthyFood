import React from 'react';
import LoginButton from './LoginButton.jsx';
import LogoutButton from './LogoutButton.jsx';
import { useAuth0 } from "@auth0/auth0-react";
import styles from './login.module.css';
import Image from './healthylogo.png';

const Login = (props) => {
  const { loginWithRedirect, isAuthenticated } = useAuth0()
  return (
      <div className={styles.loginContainer}>
        <div className={styles.buttonContainer}>
        <img src={Image} alt={'logo'} className={`${styles.logo} ${styles.fadeIn}`}/>
          { isAuthenticated === true ?
            <div>
              <h3 className={`${styles.title} ${styles.fadeIn}`}>Sign Out</h3>
              <LogoutButton />
            </div>
          :
            <div>
              <h3 className={`${styles.title} ${styles.fadeIn}`}>Welcome back!</h3>
              <LoginButton />
              <h6 className={styles.register} onClick={() => loginWithRedirect()}>Don&apos;t have an account? Get started</h6>
            </div>
          }
        </div>
      </div>
  )
}

export default Login;
