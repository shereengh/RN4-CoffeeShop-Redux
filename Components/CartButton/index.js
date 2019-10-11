import React, { Component } from "react";
import { Icon } from "native-base";
import { withNavigation } from "react-navigation";
import Counter from "../Counter";
import { View } from "react-native";
class CartButton extends Component {
  render() {
    return (
      <View>
        <Counter />
        <Icon
          onPress={() => this.props.navigation.navigate("CoffeeCart")}
          name="shoppingcart"
          type="AntDesign"
        />
      </View>
    );
  }
}

export default withNavigation(CartButton);
