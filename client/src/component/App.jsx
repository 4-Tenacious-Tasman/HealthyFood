import React from 'react';
import Main from './Main.jsx';
import Navigation from './homepage/Navigation.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
    }
  }


  render() {
    return(
      <div className='app-container'>
        {/* <Navigation /> */}
        <Main />
      </div>
    )
  }
}
export default App