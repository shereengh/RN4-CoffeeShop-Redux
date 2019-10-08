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
  ]
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        items: state.items.concat(payload)
      };
    case REMOVE_ITEM:
      const temp = payload;
      const items = items.filter(item => item !== temp);
      return {
        ...state,
        items: items
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
