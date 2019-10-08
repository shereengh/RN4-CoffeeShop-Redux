import axios from "axios";
import * as actionTypes from "./types";

export const getCoffeeShops = () => {
  return async dispatch => {
    dispatch(setCoffeeShopsLoading());
    try {
      const res = await axios.get("http://178.128.114.232/api/?format=json");
      const coffeeShops = res.data;
      dispatch({
        type: actionTypes.GET_COFFEESHOPS,
        payload: coffeeShops
      });
    } catch (err) {
      console.error("Error while fetching shops", err);
    }
  };
};

export const setCoffeeShopsLoading = () => ({
  type: actionTypes.COFFEESHOPS_LOADING
});

export const addItemToCart = item => {
  return async dispatch => {
    try {
      dispatch({
        type: actionTypes.ADD_ITEM,
        payload: item
      });
    } catch (err) {
      console.error(error);
      console.error("Error while adding to cart", err);
    }
  };
};

export const removeItemFromCart = item => {
  return async dispatch => {
    try {
      dispatch({
        type: actionTypes.REMOVE_ITEM,
        payload: item
      });
    } catch (err) {
      console.error(error);
      console.error("Error while removing item", err);
    }
  };
};

export const checkoutCart = () => {
  return async dispatch => {
    try {
      dispatch({
        type: actionTypes.CHECKOUT
      });
    } catch (err) {
      console.error(error);
      console.error("Error while checking out", err);
    }
  };
};
