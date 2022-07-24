import ChartContext from "./cart-context";
import { useReducer } from "react";

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      const existingCartItemIndex = state.item.findIndex(
        (i) => (i.id === action.item.id)
      );
      const existingCartItem = state.item[existingCartItemIndex];
      let updatedItems;
      let updateItem;
      if (existingCartItem) {
        updateItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + action.item.amount
        };
        // console.log(existingCartItem)
        updatedItems = [...state.item];
        updatedItems[existingCartItemIndex] = updateItem;
      }else{
        updatedItems = state.item.concat(action.item);
      }
      return {
        item: updatedItems,
        totalAmount:
          state.totalAmount +
          action.item.price * action.item.amount,
      };
    case "REMOVE_ITEM":
      const existingCartItemIndex1 = state.item.findIndex(
        (i) => (i.id === action.id)
      );
      const existingCartItem1 = state.item[existingCartItemIndex1];
      state.totalAmount -= existingCartItem1.price
      if (existingCartItem1.amount === 1){
        state.item =  state.item.filter((i) => i.id !== action.id)
      }else{
        state.item = [...state.item]
        state.item[existingCartItemIndex1] = {...existingCartItem1, amount: existingCartItem1.amount - 1}
      }
      return {
        item: state.item,
        totalAmount: state.totalAmount
      };
    default:
      return { item: [], totalAmount: 0 };
  }
}

const ChartContextProvider = (props) => {
  const [cartState, dispatch] = useReducer(cartReducer, {
    item: [],
    totalAmount: 0,
  });
  const addItemHandler = (item) => {
    dispatch({ type: "ADD_ITEM", item: item });
  };

  const removeItemHandler = (id) => {
    dispatch({ type: "REMOVE_ITEM", id: id });
  };
  const cartContext = {
    items: cartState.item,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };
  return (
    <ChartContext.Provider value={cartContext}>
      {props.children}
    </ChartContext.Provider>
  );
};
export default ChartContextProvider;
