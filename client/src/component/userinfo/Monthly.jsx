import React from 'react';
import axios from 'axios';
import styles from './Userinfo.module.css';
import Calendar from 'react-calendar';
import MealPlan from './MealPlan.jsx';

class Monthly extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    this.clickDate = this.clickDate.bind(this);
    this.convert = this.convert.bind(this)
  }
  convert(str) {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  }

  clickDate(value) {
    const date = this.convert(value);
    this.props.updateDate(date);
    this.props.CalendarChange(date);
  }

  render() {
    return (
      <div className={styles.calendardiv} >
      <Calendar onChange={this.clickDate} />
      {/* {this.props.MealPlan ? <MealPlan date={this.props.date} newPlan={this.props.newPlan} changePlan={this.props.changePlan} dailyMealPlans={this.props.dailyMealPlans} /> : null} */}
      </div>
    )
  }
}

export default Monthly