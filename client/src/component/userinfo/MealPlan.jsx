import React from 'react';
import styles from './Userinfo.module.css';

class MealPlan extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}

  }

  render() {
    return (<div className={` ${styles.MealPlanContainer} card p-3`}>
      <table className={styles.weeklyMeals}>
        <thead>
          <tr className={styles.test}>
            <th scope="col" >day</th>
          </tr>
        </thead>
        <tbody>
          <tr >
            <td><p>Meal  breakfast</p> <p>title</p></td>
          </tr>
          <tr>
            <td><p>Meal  lunch</p><p>title</p></td>
          </tr>
          <tr>
            <td><p>Meal  dinner</p><p>title</p></td>
          </tr>
        </tbody>
      </table>
    </div>
    )
  }


}
export default MealPlan;