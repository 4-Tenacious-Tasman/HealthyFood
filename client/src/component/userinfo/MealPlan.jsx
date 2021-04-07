import React from 'react';
import axios from 'axios';
import styles from './Userinfo.module.css';

class MealPlan extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      meal_id: null,
      updated: false
    }
    this.planChange = this.planChange.bind(this);
  }

  planChange() {
    this.props.changePlan(this.state.meal_id);
  }


  render() {
    const meal = this.props.dailyMealPlans.filter(meal => meal.date.includes(this.props.date));
    if (meal.length > 0 && !this.state.updated) {
      this.setState({
        meal_id: meal[0].id,
        updated: true
      });
    }
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
                  <td><p>Meal  breakfast</p> <p>{meal[0].breakfast.title}</p></td>
                </tr>
                <tr>
                  <td><p>Meal  lunch</p><p>{meal[0].lunch.title}</p></td>
                </tr>
                <tr>
                  <td><p>Meal  dinner</p><p>{meal[0].dinner.title}</p></td>
                </tr>
              </tbody>
            </table>
            <button onClick={this.planChange}>Change Meal Plan</button>
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
            </table>
            <button onClick={this.props.newPlan}>Generate Meal Plan</button>
          </div>
        }
      </>
    );
  }
}
export default MealPlan;