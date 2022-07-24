import { createSlice, configureStore } from "@reduxjs/toolkit";
const redux = require("redux");

const initialState = {
  counter: 0,
  showCounter: true,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const initialStateAuth = {
  isAuthed: false,
};

const AuthSlice = createSlice({
  name: "auth",
  initialState: initialStateAuth,
  reducers: {
    login(state) {
      state.isAuthed = true;
    },
    loout(state) {
      state.isAuthed = false;
    },
  },
});

// const counterReducer = (state = { counter: 0, showCounter: true }, action) => {
//   if (action.type === "ADD") {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//     };
//   } else if (action.type === "SUB") {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   } else if (action.type === "INC") {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   } else if (action.type === "SHO") {
//     return {
//       counter: state.counter,
//       showCounter: !state.showCounter,
//     };
//   } else {
//     return state;
//   }
// };

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: AuthSlice.reducer,
  }
});
export const counterActions = counterSlice.actions;
export const authActions = AuthSlice.actions;
export default store;
