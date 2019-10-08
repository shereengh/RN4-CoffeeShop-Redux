import React, { Component } from "react";
import { connect } from "react-redux";

class Counter extends Component {
  render() {
    return (
        <Text>{this.props.counter}</Text>
    );
  }
}
const mapStateToProps = state => ({
    counter: state.cartReducer.counter
  });
export default Counter;
export default connect(
    mapStateToProps
  )(Counter);