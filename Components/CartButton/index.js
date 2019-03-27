import React, { Component } from "react";
import { Icon } from "native-base";
import { withNavigation } from "react-navigation";

class CartButton extends Component {
  render() {
    return (
      <Icon
        onPress={() => this.props.navigation.navigate("CoffeeCart")}
        name="shoppingcart"
        type="AntDesign"
      />
    );
  }
}

export default withNavigation(CartButton);
