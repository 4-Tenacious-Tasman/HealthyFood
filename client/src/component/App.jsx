import React from 'react';
import Main from './Main.jsx';
import Navigation from './homepage/Navigation.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      page: ''
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
    return(
      <div className='app-container'>
        <Navigation />
        <h1>Healthy Foods</h1>
        <Main />
      </div>
    )
  }
}
export default App