import React from 'react';
import axios from 'axios';
import Preferences from './UserPreferences.jsx'
import styles from './Userinfo.module.css';
import MealPlan from './MealPlan.jsx'
import Monthly from './Monthly.jsx'

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        id: 3,
        email: 'hahaha@gmail.com',
        first_name: '',
        last_name: '',
        age: null,
        preferences: {
          target_calories: null,
          diet: null,
          exclude: null
        }
      },
      PreferencesBool: false,
      MealPlan: false


    }
    this.updatePreferences = this.updatePreferences.bind(this);
    this.submitPreferences = this.submitPreferences.bind(this);
    this.CalendarChange = this.CalendarChange.bind(this)
  }

  CalendarChange(){
    let modal = !this.state.MealPlan;
    this.setState({
      MealPlan: modal
    })
  }

  updatePreferences() {
    let modal = !this.state.PreferencesBool;
    this.setState({
      PreferencesBool: modal
    })
  }

  submitPreferences(usr) {
    const { first_name, last_name, age, target_calories, diet, exclude } = usr;
    const excludeString = exclude.join();
    const email = this.state.user.email;
    axios.post('/signup', { first_name, last_name, email, age, target_calories, diet, exclude: excludeString })
      .then(response => {
        const { data } = response;
        this.setState({
          [this.state.user.first_name]: data.first_name,
          [this.state.user.last_name]: data.last_name,
          [this.state.user.age]: data.age,
          [this.state.user.preferences]: {
            target_calories: data.target_calories,
            diet: data.diet,
            exclude: data.exclude
          }
        });
      })
      .catch(err => {
        throw err;
      })
  }

  render() {
    return (
      <div className={styles.test2} >
        {this.state.PreferencesBool ? <Preferences close={this.updatePreferences} submitPreferences={this.submitPreferences} /> : null}
        <div className={`${styles.photoContainer} container mt-5 d-flex`} >
          <div className={`${styles.userinfo} card p-3`}>
            <img src='https://myspace.com/common/images/user.png' className={`${styles.UserPhoto} rounded`} width="30%" />
            <br></br>
            <p className={styles.greeting}>Hello {this.state.user.first_name}</p>
            <br></br>
            <button className={styles.Preferences} onClick={(event) => { event.preventDefault(); this.updatePreferences() }} >Edit Profile</button>
          </div>
          <Monthly CalendarChange={this.CalendarChange}/>
         {this.state.MealPlan? <MealPlan />  : null}
        </div>

      </div>
    )
  }
}

export default UserProfile;