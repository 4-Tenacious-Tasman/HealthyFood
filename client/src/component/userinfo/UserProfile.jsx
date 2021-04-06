import React from 'react';
import axios from 'axios';
import Preferences from './UserPreferences.jsx'
import styles from './Userinfo.module.css';

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
      PreferencesBool: false

    }
    this.updatePreferences = this.updatePreferences.bind(this);
    this.submitPreferences = this.submitPreferences.bind(this);
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
      <div >
        {this.state.PreferencesBool ? <Preferences close={this.updatePreferences} submitPreferences={this.submitPreferences} /> : null}
        <div className={`${styles.photoContainer} container mt-5 d-flex`} >
          <div className={`${styles.userinfo} card p-3`}>
            <img src='https://myspace.com/common/images/user.png' className={`${styles.UserPhoto} rounded`} width="30%" />
            <br></br>
            <p className={styles.greeting}>Hello User</p>
            <br></br>
            <button className={styles.Preferences} onClick={(event) => { event.preventDefault(); this.updatePreferences() }} >Edit Profile</button>

          </div>

        </div>
        <div className={`${styles.GenerateMeal} card p-3`}>
          <button className={`${styles.GenerateMealBTN}`}>Generate Meal</button>
        </div>

        <div className={`${styles.weeklyCalendar} card p-3`}>
          <table>
            <thead>
              <tr className={styles.test}>
                <th scope="col" >mon</th>
                <th scope="col">tue</th>
                <th scope="col">wed</th>
                <th scope="col">thur</th>
                <th scope="col">fri</th>
                <th scope="col">sat</th>
                <th scope="col">sun</th>
              </tr>
            </thead>
            <tbody>
              <tr className={styles.weeklyMeals}>
                <td>Meal Mon breakfast</td>
                <td>Meal Tus breakfast </td>
                <td>Meal Wed breakfast</td>
                <td>Meal thur breakfast</td>
                <td>Meal fri breakfast</td>
                <td>Meal sat breakfast</td>
                <td>Meal sun breakfast</td>
              </tr>
              <tr>
                <td>Meal Mon lunch</td>
                <td>Meal Tus lunch </td>
                <td>Meal Wed lunch</td>
                <td>Meal thur lunch</td>
                <td>Meal fri lunch</td>
                <td>Meal sat lunch</td>
                <td>Meal sun lunch</td>
              </tr>
              <tr>
                <td>Meal Mon dinner</td>
                <td>Meal Tus dinner </td>
                <td>Meal Wed dinner</td>
                <td>Meal thur dinner</td>
                <td>Meal fri dinner</td>
                <td>Meal sat dinner</td>
                <td>Meal sun dinner</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    )
  }
}

export default UserProfile;