import React from 'react';
import DummyData from './DummyData.js'
import Aisle from './Aisle/Aisle.jsx'
import Cart from './Cart/Cart.jsx'
import AisleButtons from './AisleButtons/AisleButtons.jsx'
import styles from './FarmersMarket.module.css'
import axios from 'axios'

class FarmersMarket extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     groceries: [],
     selected: 'home',
     cart: [],
     checkout: false
    }
    this.selectAisle = this.selectAisle.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.checkout = this.checkout.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
  }

  addToCart(grocery) {
    this.setState({
      cart: [...this.state.cart, grocery]
    })
  }

  checkout(e) {
    e.preventDefault();
    this.setState({
      checkout: !this.state.checkout
    })
  }

  selectAisle(category) {
    this.setState({
      selected: category
    })
  }

  removeFromCart(grocery) {
    var cartItems = this.state.cart;
    cartItems.forEach((item, i) => {
      if (item.name === grocery.name) {
        cartItems.splice(i, 1)
      }
    })
    this.setState({
      cart: cartItems
    })
  }

  componentDidMount() {
    axios.get('/ingredients')
    .then((res) => {
      this.setState({
        groceries: [...res.data]
      })
    })
  }

  render() {
    var groceriesToRender = []
    if (this.state.groceries.length > 0) {
      this.state.groceries.forEach((grocery) => {
        if (grocery.aisle === this.state.selected) {
          groceriesToRender.push(grocery);
        }
      })
    }

    return (
      <div className={styles.background}>
        <div className={styles.cartContainer}>
          <button className={styles.cart} onClick={this.checkout}>Cart</button>
        </div>
        {this.state.checkout ? <Cart groceries={this.state.cart} checkout={this.checkout} removeFromCart={this.removeFromCart}/> : null}
        <AisleButtons selectAisle={this.selectAisle}/>
        <div className={styles.container}>
          <Aisle groceries={groceriesToRender} addToCart={this.addToCart}/>
        </div>
      </div>
    )
  }
}

export default FarmersMarket;
