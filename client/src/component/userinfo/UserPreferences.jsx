import React from 'react';
import styles from './Userinfo.module.css';


class Preferences extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      first_name: '',
      last_name: '',
      age: null,
      target_calories: null,
      diet: null,
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
      email: '',
      age: null,
      target_calories: null,
      diet: null,
      exclude: []
    });
  }

  render() {
    console.log(this.state);
    return (
      <div className={styles.modalBackground}>

        <div className={`${styles.imageModal} ${styles.fadeIn}`}>
          <button className={`${styles.leavePreferences}`} onClick={(event) => { event.preventDefault(); this.props.close() }}>✕</button>
          <form onSubmit={this.handleSubmit} className={`${styles.PreferencesForm}`}>
            <div className={`${styles.FirstName}`}>
              <input placeholder={`First Name`} onChange={this.handleChange} name={`first_name`}  value={this.state.first_name} required />
            </div>
            <div className={`${styles.LastName}`}>
              <input placeholder={`Last Name`} onChange={this.handleChange} name={`last_name`}  value={this.state.last_name} required />
            </div>
            <div  className={`${styles.Age}`}>
              <input placeholder={`Age`} type={`number`} onChange={this.handleChange} name={`age`}  value={this.state.age} required />
            </div>
            <div className={`${styles.TargetCal}`}>
              <input placeholder={`Target Calories`} type={`number`} className={styles.caliPref} onChange={this.handleChange} name={`target_calories`} value={this.state.target_calories} />
            </div>
            <div className={`${styles.DietSelect}`}>
              <select onChange={this.handleChange} name={`diet`}>
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
              <input type="checkbox" name={`exclude`} value="Dairy" onChange={this.checked}/>
              <label htmlFor="Dairy"> Dairy</label>
              <input type="checkbox" name={`exclude`} value="Egg" onChange={this.checked}/>
              <label htmlFor="Egg"> Egg</label>
              <input type="checkbox" name={`exclude`} value="Gluten" onChange={this.checked}/>
              <label htmlFor="Gluten"> Gluten</label>
              <input type="checkbox" name={`exclude`} value="Grain" onChange={this.checked}/>
              <label htmlFor="Grain"> Grain</label>
              <input type="checkbox" name={`exclude`} value="Peanut" onChange={this.checked}/>
              <label htmlFor="Peanut"> Peanut</label>
              <input type="checkbox" name={`exclude`} value="Seafood" onChange={this.checked}/>
              <label htmlFor="Seafood"> Seafood</label>
              <input type="checkbox" name={`exclude`} value="Sesame" onChange={this.checked}/>
              <label htmlFor="Sesame"> Sesame</label>
              <input type="checkbox" name={`exclude`} value="Shellfish" onChange={this.checked}/>
              <label htmlFor="Shellfish">Shellfish</label>
              <input type="checkbox" name={`exclude`} value="Soy" onChange={this.checked}/>
              <label htmlFor="Soy"> Soy</label>
              <input type="checkbox" name={`exclude`} value="Sulfite" onChange={this.checked}/>
              <label htmlFor="Sulfite"> Sulfite</label>
              <input type="checkbox" name={`exclude`} value="Tree Nut" onChange={this.checked}/>
              <label htmlFor="Tree Nut"> Tree Nut</label>
              <input type="checkbox" name={`exclude`} value="Wheat" onChange={this.checked}/>
              <label htmlFor="Wheat"> Wheat</label>
            </div>
            <button type="submit">Submit</button>
          </form>

        </div>
      </div>
    )


  }

}
export default Preferences;