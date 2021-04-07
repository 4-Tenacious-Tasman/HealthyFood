import React from 'react';
import axios from 'axios';
import styles from './Userinfo.module.css';

class MealPlan extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }


  render() {
    const meal = this.props.dailyMealPlans.filter(meal => meal.date.includes(this.props.date));
    return (
      <>
        {meal.length > 0
          ? <div className={` ${styles.MealPlanContainer} card p-3`}>
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
            <button onClick={this.props.newPlan}>Change Meal Plan</button>
          </div>
          : <div className={` ${styles.MealPlanContainer} card p-3`}>
            <table className={styles.weeklyMeals}>
              <thead>
                <tr className={styles.test}>
                  <th scope="col" >day</th>
                </tr>
              </thead>
              <br />
              <br />
            Hmmmm...
            <br />
            Doesn't look like you have a meal plan yet.
            <br />
              <button onClick={this.props.newPlan}>Generate Meal Plan</button>
            </table>
          </div>
        }
      </>
    );
  }
}
export default MealPlan;