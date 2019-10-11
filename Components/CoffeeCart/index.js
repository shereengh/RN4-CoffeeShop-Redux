import React, { Component } from "react";
import { connect } from "react-redux";

// NativeBase Components
import { Text, List, Button } from "native-base";
// Component
import CartItem from "./CartItem";

import {
  checkoutCart,
  removeItemFromCart
} from "../../store/actions/coffeeActions";
class CoffeeCart extends Component {
  handleCheckoutButton = () => {
    this.props.checkoutCart();
  };
  render() {
    let items = this.props.items;
    let cartItems;
    if (items) {
      cartItems = items.map((item, index) => (
        <CartItem
          item={item}
          key={index}
          removeItemFromCart={this.props.removeItemFromCart}
        />
      ));
    }

    return (
      <List>
        {cartItems}
        <Button onPress={this.handleCheckoutButton} full danger>
          <Text>Checkout</Text>
        </Button>
      </List>
    );
  }
}

const mapStateToProps = state => ({
  items: state.cartReducer.items
});
const mapDispatchToProps = dispatch => {
  return {
    removeItemFromCart: item => dispatch(removeItemFromCart(item)),
    checkoutCart: () => dispatch(checkoutCart())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoffeeCart);
