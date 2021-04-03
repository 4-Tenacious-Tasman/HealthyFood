import React from 'react';
import HomePage from './homepage/HomePage.jsx';
import Login from './login/Login.jsx';
import FarmersMarket from './marketplace/FarmersMarket.jsx';
import UserProfile from './userinfo/UserProfile.jsx';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      page: '',
    }
    this.changePage = this.changePage.bind(this);
  }


  changePage(e) {
    console.log(e.target.name)
    this.setState({
      page: e.target.name
    })
  }

  render() {
    return (
      <div>

      {this.state.page.length === 0 &&
        <div>
        <button name="home" onClick={this.changePage}>HomePage</button>
        <button name="login" onClick={this.changePage}>Login/Signin</button>
        <button name="market" onClick={this.changePage}>MarketPlace</button>
        <button name="profile" onClick={this.changePage}>UserProfile</button>
        </div>
        }
        {this.state.page === "home" && (
          <HomePage />
        )}

        {this.state.page === "login" && (
          <Login />
        )}


        {this.state.page === "market" && (
          <FarmersMarket />
        )}


        {this.state.page === "profile" && (
          <UserProfile />
        )}







      </div>
    )
  }
}
export default App