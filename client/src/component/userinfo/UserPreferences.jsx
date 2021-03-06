import React from 'react';
import styles from './Userinfo.module.css';


class Preferences extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      first_name: this.props.userState.first_name,
      last_name: this.props.userState.last_name,
      email: this.props.userState.email,
      age: this.props.userState.age,
      target_calories: this.props.userState.preferences.target_calories,
      diet: this.props.userState.preferences.diet,
      exclude: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.checked = this.checked.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  checked(event) {
    const updateExclude = this.state.exclude;
    if (event.target.checked) {
      updateExclude.push(event.target.value);
    }
    this.setState({
      [event.target.name]: updateExclude
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.submitPreferences(this.state);
    this.setState({
      first_name: '',
      last_name: '',
      age: null,
      target_calories: null,
      diet: null,
      exclude: []
    });
  }

  render() {
    const { first_name, last_name, email, age, preferences } = this.props.userState;
    return (
      <div className={styles.modalBackground}>

        <div className={`${styles.imageModal} ${styles.fadeIn}`}>
         <div className={styles.exitpref}> <button className={`${styles.leavePreferences}`} onClick={(event) => { event.preventDefault(); this.props.close() }}>✕</button></div>
         <div className={styles.formdiv}>
           <h4>User Settings</h4>
          <form onSubmit={this.handleSubmit} >
            <div className={`${styles.FirstName } ${styles.formSpacer}`}>
              <input className={`${styles.inputer}`} placeholder={`First Name`} onChange={this.handleChange} name={`first_name`} value={this.state.first_name} required />
            </div>
            <div className={`${styles.LastName} ${styles.formSpacer}`}>
              <input placeholder={`Last Name`} className={`${styles.inputer}`} onChange={this.handleChange} name={`last_name`} value={this.state.last_name} required />
            </div>
            <div className={`${styles.Age} ${styles.formSpacer} `}>
              <input placeholder={`Age`} className={`${styles.inputer}`} type={`number`} onChange={this.handleChange} name={`age`} value={this.state.age} required />
            </div>
            <div className={`${styles.TargetCal} ${styles.formSpacer}`}>
              <input placeholder={`Target Calories`} type={`number`} className={`${styles.inputer}`}  onChange={this.handleChange} name={`target_calories`} value={this.state.target_calories} />
            </div>
            <div className={`${styles.DietSelect}`}>
              <select onChange={this.handleChange} name={`diet`} className={`${styles.inputer}`}>
                <option value="" disabled selected>Diet Preference</option>
                <option value={`Vegetarian`}>Vegetarian</option>
                <option value={`Vegan`}>Vegan</option>
                <option value={`Gluten Free`}>Gluten Free</option>
                <option value={`Ketogenic`}>Ketogenic</option>
                <option value={`Lacto-Vegetarian`}>Lacto-Vegetarian</option>
                <option value={`Ovo-Vegetarian`}>Ovo-Vegetarian</option>
                <option value={`Pescetarian`}>Pescetarian</option>
                <option value={`Paleo`}>Paleo</option>
                <option value={`Primal`}>Primal</option>
                <option value={`Whole30`}>Whole30</option>
              </select>
            </div>
            <div className={`${styles.DietSelect}`} >

              <div>
                <br></br>
              <h4> Meal Restrictions</h4>
                <input  type="checkbox" name={`exclude`} value="Dairy" onChange={this.checked} />
                <label className={styles.spacing} htmlFor="Dairy"> Dairy</label>
                <input type="checkbox" name={`exclude`} value="Egg" onChange={this.checked} />
                <label className={styles.spacing} htmlFor="Egg"> Egg</label>
                <input type="checkbox" name={`exclude`} value="Gluten" onChange={this.checked} />
                <label className={styles.spacing} htmlFor="Gluten"> Gluten</label>
                <input type="checkbox" name={`exclude`} value="Grain" onChange={this.checked} />
                <label className={styles.spacing} htmlFor="Grain"> Grain</label>
              </div>
              <div>
                <input type="checkbox" name={`exclude`} value="Peanut" onChange={this.checked} />
                <label className={styles.spacing} htmlFor="Peanut"> Peanut</label>
                <input type="checkbox" name={`exclude`} value="Seafood" onChange={this.checked} />
                <label className={styles.spacing} htmlFor="Seafood"> Seafood</label>
                <input type="checkbox" name={`exclude`} value="Sesame" onChange={this.checked} />
                <label className={styles.spacing}  htmlFor="Sesame"> Sesame</label>
                <input  type="checkbox" name={`exclude`} value="Shellfish" onChange={this.checked} />
                <label className={styles.spacing} htmlFor="Shellfish">Shellfish</label>
              </div>
              <input type="checkbox" name={`exclude`} value="Soy" onChange={this.checked} />
              <label className={styles.spacing} htmlFor="Soy"> Soy</label>
              <input type="checkbox" name={`exclude`} value="Sulfite" onChange={this.checked} />
              <label  className={styles.spacing} htmlFor="Sulfite"> Sulfite</label>
              <input type="checkbox" name={`exclude`} value="Tree Nut" onChange={this.checked} />
              <label className={styles.spacing} htmlFor="Tree Nut"> Tree Nut</label>
              <input type="checkbox" name={`exclude`} value="Wheat" onChange={this.checked} />
              <label className={styles.spacing}  htmlFor="Wheat"> Wheat</label>
            </div>
            <button className={styles.button  } type="submit">Submit</button>
          </form>
          </div>
        </div>
      </div>
    )


  }

}
export default Preferences;