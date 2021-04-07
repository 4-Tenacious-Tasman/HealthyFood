import React from 'react';
import axios from 'axios';
import styles from './Userinfo.module.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

class Monthly extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.test = this.test.bind(this);
    this.convert = this.convert.bind(this)
  }
convert(str) {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  }


  test(value, event){
    this.props.CalendarChange()
    console.log(this.convert(value))
}
render(){
  console.log(this.props)
 return(
  <Calendar onChange={this.test} className={`${styles.weeklyCalendar}`}/>
 )
}
}

export default Monthly