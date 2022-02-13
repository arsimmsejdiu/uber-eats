let defaultState = {
  selectedItems: { items: [], restaurantName: "" },
};

let cartReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      let newState = { ...state };
      newState.selectedItems = {
        items: [...newState.selectedItems, action.payload],
        restaurantName: action.payload.restaurantName,
      };
      console.log(newState, "the new state works...");
      return newState;
    }
    default: return state;
  }
};

export default cartReducer;
