import React from 'react';
import styles from './Promotions.module.css'
import produce from '/client/public/images/produce.jpeg'
import meats from '/client/public/images/healthyMeats.jpeg'
import baggedGroceries from '/client/public/images/baggedGroceries.jpeg'
import eggsAndDairy from '/client/public/images/eggsAndDairy.jpeg'

const Promotions = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.produce}>
        <div className={styles.text}>
          <div className={styles.title}>Produce</div>
          <div className={styles.heading}>Fresh, seasonal farmers market quality fruits and vegetables.</div>
          <ul>
            <li className={styles.list}>Reliable staples like avocados, carrots, and apples</li>
            <li className={styles.list}>Fresh, organic citrus for making fresh lemonade</li>
            <li className={styles.list}>GMO & pesticide free</li>
          </ul>
        </div>
        <img className={styles.produceImg}  src={produce}></img>
      </div>
      <div className={styles.meat}>
        <img className={styles.meatsImg}  src={meats}></img>
        <div className={styles.text}>
          <div className={styles.title}>Meats & Seafoods</div>
          <div className={styles.heading}>Animal proteins from producers committed to animal welfare and using land and resources responsibly.</div>
          <ul>
            <li className={styles.list}>Heritage, pasture-raised chicken</li>
            <li className={styles.list}>Sustainably farmed salmon that better utilizes the whole fish</li>
            <li className={styles.list}>Ground beef for easy burger, chili, and taco nights</li>
          </ul>
        </div>
      </div>
      <div className={styles.dairy}>
        <div className={styles.text}>
          <div className={styles.title}>Eggs & Dairy</div>
          <div className={styles.heading}>Cage-free eggs, cow and goat cheese, plus milk, butter and more from sustainable dairies near you.</div>
          <ul>
            <li className={styles.list}>Cage-free and pasture raised eggs</li>
            <li className={styles.list}>Your favorite brands of yogurt</li>
            <li className={styles.list}>A fun variety of cheeses</li>
          </ul>
        </div>
        <img className={styles.dairyImg}  src={eggsAndDairy}></img>
      </div>
    </div>
  )
}

export default Promotions;