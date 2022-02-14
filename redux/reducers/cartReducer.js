let defaultState = {
  selectedItems: { items: [], restaurantName: "" },
};

let cartReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      let newState = { ...state };
      if (action.payload.checkboxValue) {
        console.log("ADD TO CART");
        newState.selectedItems = {
          items: [...newState.selectedItems.items, action.payload], // [...newState.selectedItems.items -> what the state was(old state), action.payload -> the new item thet we put in]
          restaurantName: action.payload.restaurantName, // plus the restaurant name
        };
      } else {
        console.log("REMOVE FROM CART");
        newState.selectedItems = {
          items: [
            ...newState.selectedItems.items.filter(
              (item) => item.title !== action.payload.title // If the checkboxValue is false, filter out the item that has the same title as the one we are trying to remove
            ),
          ],
          restaurantName: action.payload.restaurantName,
        };
      }

      console.log(newState, "the newState works..."); // this is the new state console log test
      return newState; // return the new state
    }
    default:
      return state;
  }
};

export default cartReducer;
