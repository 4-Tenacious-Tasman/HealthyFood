import React from 'react';
import styles from './Cart.module.css'

const Cart = (props) => {
  var total = 0;
  props.groceries.forEach((grocery) => {
    total += grocery.costValue
  })
  var itemCount = props.groceries.length;

  return (
    <div className={styles.modal}>
      <div className={styles.modalmain}>
        <div className={styles.yourCart}>Your Cart ({itemCount} Items)</div>
        <div>
          <div>
            {props.groceries.map((grocery , i) => {
              return (
                <div className={styles.item} key={i}>
                  <img className={styles.image} src={grocery.image}></img>
                  <div className={styles.itemInfo}>
                    <div className={styles.name}>{grocery.name}</div>
                    <div className={styles.price}>Qty: 1 x ${grocery.costValue}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <div className={styles.priceContainer}>
          <div>
            <div className={styles.subtotal}>Subtotal</div>
            <div className={styles.delivery}>Delivery included</div>
            <div className={styles.taxes}>Estimated Taxes</div>
            <div className={styles.total}>Total</div>
          </div>
          <div className={styles.prices}>
            <div className={styles.subtotal}>${total}</div>
            <div className={styles.delivery}>$0.00</div>
            <div className={styles.taxes}>$0.00</div>
            <div className={styles.total}>${total}</div>
          </div>
        </div>
        <button className={styles.button}>Place Your Order</button>
      </div>
    </div>
  )
}

export default Cart;