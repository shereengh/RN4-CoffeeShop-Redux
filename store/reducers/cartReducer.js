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
  counter: 3
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      let incomingItem = action.payload;
      let foundItem = state.items.find(
        item =>
          item.drink === incomingItem.drink &&
          item.option === incomingItem.option
      );
      let counter = state.counter + 1;
      if (foundItem) {
        foundItem.quantity++;
        return {
          ...state,
          items: [...state.items],
          counter: counter
        };
      } else {
        return {
          ...state,
          items: state.items.concat(incomingItem),
          counter: counter
        };
      }

    case REMOVE_ITEM:
      const temp = action.payload;
      const items = state.items.filter(item => item !== temp);
      let counter2 = state.counter - 1;
      return {
        ...state,
        items: items,
        counter: counter2
      };
    case CHECKOUT:
      return {
        ...state,
        items: [],
        counter: 0
      };
    default:
      return state;
  }
};

export default cartReducer;
