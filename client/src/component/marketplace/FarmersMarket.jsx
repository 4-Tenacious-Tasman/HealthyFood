import React from 'react';
import DummyData from './DummyData.js'
import Aisle from './Aisle/Aisle.jsx'
import Cart from './Cart/Cart.jsx'
import AisleButtons from './AisleButtons/AisleButtons.jsx'
import styles from './FarmersMarket.module.css'
import OrderConfirmation from './OrderConfirmation/OrderConfirmation.jsx'
import Promotions from './Promotions/Promotions.jsx'
import axios from 'axios'

class FarmersMarket extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     groceries: [],
     selected: 'home',
     cart: [],
     checkout: false,
     confirmation: false
    }
    this.selectAisle = this.selectAisle.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.checkout = this.checkout.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
    this.showConfirmation = this.showConfirmation.bind(this);
    this.hideConfirmation = this.hideConfirmation.bind(this);
    this.clearCart = this.clearCart.bind(this);
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

  showConfirmation(e) {
    e.preventDefault();
    this.checkout(e)
    this.clearCart(e)
    console.log('clicked')
    this.setState({
      confirmation: !this.state.confirmation
    })
  }

  clearCart(e) {
    e.preventDefault();
    this.setState({
      cart: []
    })
  }

  hideConfirmation(e) {
    e.preventDefault();
    this.setState({
      confirmation: !this.state.confirmation
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
        {this.state.checkout ? <Cart groceries={this.state.cart} showConfirmation={this.showConfirmation} checkout={this.checkout} removeFromCart={this.removeFromCart}/> : null}
        {this.state.confirmation ? <OrderConfirmation hideConfirmation={this.hideConfirmation}/> : null}
        <AisleButtons selectAisle={this.selectAisle}/>
        <div className={styles.container}>
          <Aisle groceries={groceriesToRender} addToCart={this.addToCart}/>
          {this.state.selected === 'home' ? <Promotions /> : null}
        </div>
      </div>
    )
  }
}

export default FarmersMarket;
