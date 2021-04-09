import React from 'react';
import axios from 'axios';
import styles from './Userinfo.module.css';


class MealPlan extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      meal_id: null,
      updated: false,
      mealmodal: false,
      readyInMinutes: 0,
      servings: 0,
      sourceUrl:'',
      title:''
    }
    this.planChange = this.planChange.bind(this);
    this.convert = this.convert.bind(this)
    this.exit = this.exit.bind(this);
  }
  convert(str) {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  }

  exit(){
    var modal = !this.state.mealmodal
    console.log(modal)
    this.setState({
      mealmodal: modal
    })
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
          ? <div className={styles.modalBackground}>
            <div className={`${styles.mealModal} ${styles.fadeIn}`}>

            <button className={`${styles.leavemeal}`} onClick={(event)=>{event.preventDefault(); this.props.CalendarChange()}} >✕</button>

            <div className={styles.divider}>

            <table className={styles.weeklyMeals}>
              <thead>
                <tr className={styles.test}>
                  <th scope="col" className={styles.day} >{this.convert(meal[0].date)}</th>
                </tr>
              </thead>
              <tbody>
                <tr >
                  <td><p >Meal  breakfast</p> <a href={meal[0].breakfast.sourceUrl} className ={styles.buttonQ } >{meal[0].breakfast.title}</a></td>
                </tr>
                <br></br>
                <tr>
                  <td><p>Meal  lunch</p><a href={meal[0].lunch.sourceUrl} className ={styles.buttonQ }>{meal[0].lunch.title}</a></td>
                </tr>
                <tr>
                  <td><p>Meal  dinner</p><a href={meal[0].dinner.sourceUrl} className ={styles.buttonQ }>{meal[0].dinner.title}</a></td>
                </tr>
              </tbody>
            </table>

            <button className={styles.button} onClick={this.planChange}>Change Meal Plan</button>
            </div>

          {this.state.mealmodal? <MealModal meals={meal[0]} exit={this.exit} state={this.state}/> : null }
          </div>
          </div>
          : <div className={styles.modalBackground}>
            <div className={`${styles.mealModal2} ${styles.fadeIn}`}>
            <div>
            <button className={`${styles.leavemeal}`} onClick={(event)=>{event.preventDefault(); this.props.CalendarChange()}} >✕</button>
            </div>
            <table className={styles.weeklyMeals}>
              <thead>
                <tr >
                <br />
              <br />
            <h2>Hmmmm...</h2>
            <br />
                </tr>
              </thead>
              <tbody>
                <tr >
                <h2>It doesn't look like you have a meal plan for this day yet.</h2>
            <br />
                  </tr>
                  </tbody>

            <div>
            <button className={styles.button} onClick={this.props.newPlan}>Generate Meal Plan</button>
            </div>
            </table>
          </div>
          </div>

        }
      </>
    );
  }
}
export default MealPlan;