import React from 'react';
import axios from 'axios';
import { useAuth0 } from "@auth0/auth0-react";
import Preferences from './UserPreferences.jsx';
import styles from './Userinfo.module.css';
import MealPlan from './MealPlan.jsx';
import Monthly from './Monthly.jsx';
import Login from '../login/Login.jsx';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        id: null,
        email: this.props.userEmail,
        first_name: '',
        last_name: '',
        age: null,
        preferences: {
          target_calories: null,
          diet: null,
          exclude: null
        },
        date: ''
      },
      PreferencesBool: false,
      MealPlan: false,
      dailyMealPlans: []
    }
    this.updatePreferences = this.updatePreferences.bind(this);
    this.submitPreferences = this.submitPreferences.bind(this);
    this.CalendarChange = this.CalendarChange.bind(this);
    this.updateDate = this.updateDate.bind(this);
    this.newPlan = this.newPlan.bind(this);
    this.changePlan = this.changePlan.bind(this);
  }

  componentDidMount() {
    const { email } = this.state.user;
    axios.get('/userDetails', { params: { email } })
      .then(response => {
        const { id, first_name, last_name, email, age, target_calories, diet, exclude } = response.data;
        this.setState({
          user: {
            id, first_name, last_name, email, age, preferences: {
              target_calories,
              diet,
              exclude
            }
          }
        });
        axios.get('/userPlans', { params: { id }})
        .then(response => {
          const { data } = response;
          this.setState({
            dailyMealPlans: data
          });
        })
      })
      .catch(err => {
        throw err;
      })
  }

  newPlan() {
    const { date, user } = this.state;
    axios.post('/newPlan', {
      date,
      id: user.id,
      target_calories: user.preferences.target_calories,
      diet: user.preferences.diet,
      exclude: user.preferences.exclude
    })
      .then(res => {
        const { data } = res;
        this.setState({
          dailyMealPlans: data
        });
      })
      .catch(err => {
        throw err;
      });
  }

  changePlan(meal_id) {
    const { user } = this.state;
    axios.put('/changePlan', {
      meal_id,
      id: user.id,
      target_calories: user.preferences.target_calories,
      diet: user.preferences.diet,
      exclude: user.preferences.exclude
    })
      .then(res => {
        const { data } = res;
        this.setState({
          dailyMealPlans: data
        });
      })
      .catch(err => {
        throw err;
      });
  }

  CalendarChange(date) {
    let modal = !this.state.MealPlan;
    // if (date !== this.state.date) {
    this.setState({
      MealPlan: modal
    });
    // }
  }

  updateDate(date) {
    this.setState({ date });
  }

  updatePreferences() {
    let modal = !this.state.PreferencesBool;
    this.setState({
      PreferencesBool: modal
    })
  }

  submitPreferences(usr) {
    const { first_name, last_name, age, target_calories, diet, exclude } = usr;
    const { id } = this.state.user;
    const excludeString = exclude.join();
    axios.put('/updatePreferences', { id, first_name, last_name, age, target_calories, diet, exclude: excludeString })
      .then(response => {
        const { id, first_name, last_name, email, age, target_calories, diet, exclude } = response.data;
        this.setState({
          user: {
            id, first_name, last_name, email, age, preferences: {
              target_calories,
              diet,
              exclude
            }
          }
        });
      })
      .catch(err => {
        throw err;
      })
  }

  render() {
    console.log(this.state.dailyMealPlans);
    return (
      <div className={styles.test2} >
        {this.state.PreferencesBool ? <Preferences close={this.updatePreferences} submitPreferences={this.submitPreferences} /> : null}
        <div className={`${styles.photoContainer} container mt-5 d-flex`} >
          <div className={`${styles.userinfo} card p-3`}>
            <img src='https://myspace.com/common/images/user.png' className={`${styles.UserPhoto} rounded`} width="30%" />
            <br></br>
            <p className={styles.greeting}>Hello, {this.state.user.first_name}</p>
            <br></br>
            <button className={styles.Preferences} onClick={(event) => { event.preventDefault(); this.updatePreferences() }} >Edit Profile</button>
          </div>
          <Monthly CalendarChange={this.CalendarChange} updateDate={this.updateDate} />
          {this.state.MealPlan ? <MealPlan date={this.state.date} newPlan={this.newPlan} dailyMealPlans={this.state.dailyMealPlans} changePlan={this.changePlan} /> : null}
        </div>

      </div>
    )
  }
}

export default UserProfile;