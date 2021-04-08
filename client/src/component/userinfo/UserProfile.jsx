import React from 'react';
import axios from 'axios';
// import { useAuth0 } from "@auth0/auth0-react";
import Preferences from './UserPreferences.jsx';
import styles from './Userinfo.module.css';
import MealPlan from './MealPlan.jsx';
import Monthly from './Monthly.jsx';

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
      subscribed: false,
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
    this.updateSubscription = this.updateSubscription.bind(this);
  }

  componentDidMount() {
    const { email } = this.state.user;
    axios.get('/userDetails', { params: { email } })
      .then(response => {
        const { id, first_name, last_name, email, age, target_calories, diet, exclude, subscribed } = response.data;
        this.setState({
          user: {
            id, first_name, last_name, email, age, preferences: {
              target_calories,
              diet,
              exclude
            }
          },
          subscribed
        });
        axios.get('/userPlans', { params: { id } })
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
    console.log(usr)
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

  updateSubscription() {
    const updated = !this.state.subscribed;
    const { id } = this.state.user;
    axios.put('/updateSubscription', {
      subscribed: updated,
      id
    })
      .then(result => {
        const { subscribed } = result.data[0];
        this.setState({
          subscribed
        });
      })
      .catch(err => {
        throw err;
      });
  }
  // <div>
  // <p className={styles.greeting}>Hello, {this.state.user.first_name}
  // <br/>
  // Your selected meal plan preference: {this.state.user.preferences.diet}</p>
  // <br></br>
  // <button className={styles.Preferences} onClick={(event) => { event.preventDefault(); this.updatePreferences() }} >Edit Profile</button>
  // </div>
  render() {
    console.log(this.state.user.preferences);
    const mealPlanDiet = this.state.user.preferences.diet;
    return (
      <div className={styles.test2} >
        {this.state.PreferencesBool ? <Preferences close={this.updatePreferences} submitPreferences={this.submitPreferences} userState={this.state.user} /> : null}
        {mealPlanDiet
          ? <div>
            Welcome back, {this.state.user.first_name}!
          <br />
          Your meal plan is currently set to {mealPlanDiet.toLowerCase()}.
        </div>
          : <div>Welcome back!</div>
        }
        {!this.state.subscribed
          ? <div><button onClick={this.updateSubscription}>Subscribe</button></div>
          : <div>
            <div>
              <button className={styles.button} onClick={(event) => { event.preventDefault(); this.updatePreferences() }} >Edit Profile</button>
            </div>
            <div>
              <button className={styles.button} onClick={this.updateSubscription}>Unsubscribe</button>
            </div>
          </div>
        }
        {this.state.subscribed
          ? <div className={styles.outercol}>
            <div className={styles.innerrow}>


              <div className={styles.cal}>
                <Monthly CalendarChange={this.CalendarChange} updateDate={this.updateDate} date={this.state.date} MealPlan={this.state.MealPlan} newPlan={this.newPlan} changePlan={this.changePlan} dailyMealPlans={this.state.dailyMealPlans} />
              </div>

            </div>
            {this.state.MealPlan ? <MealPlan date={this.state.date} newPlan={this.newPlan} changePlan={this.changePlan} dailyMealPlans={this.state.dailyMealPlans} CalendarChange={this.CalendarChange} /> : null}
          </div>
          : <div> Please subscribe to access your meal plans </div>
        }
        {/* // <div className={styles.outercol}>
        //   <div className={styles.innerrow}>


        //     <div className={styles.cal}>
        //       <Monthly CalendarChange={this.CalendarChange} updateDate={this.updateDate} date={this.state.date} MealPlan={this.state.MealPlan} newPlan={this.newPlan} changePlan={this.changePlan} dailyMealPlans={this.state.dailyMealPlans} />
        //     </div>

        //   </div>
        //   {this.state.MealPlan ? <MealPlan date={this.state.date} newPlan={this.newPlan} changePlan={this.changePlan} dailyMealPlans={this.state.dailyMealPlans} CalendarChange={this.CalendarChange} /> : null}
        // </div> */}


      </div>
    )
  }
}

export default UserProfile;