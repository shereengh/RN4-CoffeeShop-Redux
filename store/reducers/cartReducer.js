import { ADD_ITEM, REMOVE_ITEM, CHECKOUT } from "../actions/types";
const initialState = {
  items: [
    {
      drink: "Latte",
      option: "Small",
      quantity: 2
    },
    {
      drink: "Espresso",
      option: "Large",
      quantity: 1
    }
  ],
  counter: 0
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      let counter = state.counter + 1;
      return {
        ...state,
        items: state.items.concat(payload),
        counter: counter
      };
    case REMOVE_ITEM:
      const temp = payload;
      const items = items.filter(item => item !== temp);
      let counter = state.counter - 1;
      return {
        ...state,
        items: items,
        counter: counter
      };
    case CHECKOUT:
      return {
        ...state,
        items: []
      };
    default:
      return state;
  }
};

export default cartReducer;
