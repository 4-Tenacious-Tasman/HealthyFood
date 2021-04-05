import React from 'react';
import DummyData from './DummyData.js'
import Aisle from './Aisle/Aisle.jsx'
import AisleButtons from './AisleButtons/AisleButtons.jsx'

class FarmersMarket extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     groceries: [],
     selected: 'home'
    }
    this.selectAisle = this.selectAisle.bind(this);
  }

  selectAisle(category) {
    this.setState({
      selected: category
    })
  }

  componentDidMount() {
    this.setState({
      groceries:  [...DummyData]
    })
  }

  render() {
    var groceriesToRender = []
    this.state.groceries.forEach((grocery) => {
      if (grocery.aisle === this.state.selected) {
        groceriesToRender.push(grocery);
      }
    })

    return (
      <div>
        <AisleButtons selectAisle={this.selectAisle}/>
        <Aisle groceries={groceriesToRender}/>
      </div>
    )
  }
}

export default FarmersMarket;
