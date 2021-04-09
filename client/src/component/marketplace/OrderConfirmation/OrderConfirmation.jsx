import React from 'react';
import styles from './OrderConfirmation.module.css'
import img from '/client/public/images/confirmation.jpeg'


const OrderConfirmation = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.modalmain}>
        <div className={styles.close} onClick={props.hideConfirmation}>X</div>
        <div className={styles.textContainer}>
          <div className={styles.imageContainer}>
            <img className={styles.image} src={img}></img>
          </div>
          <div className={styles.thankYou}>Thank you for your order!</div>
          <div className={styles.confirmation}>We have received your order and will begin preparing it. You will receive an email confirmation once your order has shipped.</div>
        </div>
      </div>
    </div>
  )
}

export default OrderConfirmation;