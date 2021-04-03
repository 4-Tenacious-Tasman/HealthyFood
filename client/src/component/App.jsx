import React from 'react'


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    }

  }

  render() {
    if(this.state.count === 0){
    return (
      <div>
      <h1>TEST1</h1>
      <button>previous</button>
        <button>home</button>
        <button>next</button>
        </div>
    )}else if(this.state.count === 1){
      <div>
      <h1>TEST2</h1>
      <button onClick={this.next}>previous</button>
        <button>home</button>
        <button>next</button>
        </div>
    }

  }
}
export default App