import React from 'react';
import { Spinner } from 'react-bootstrap';
import styles from './login.module.css';

let Loader = (props) => {
  return (
    <div className="d-flex justify-content-center">
      <div className={`${styles.loader} spinner-border`} role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )
}

export default Loader;
