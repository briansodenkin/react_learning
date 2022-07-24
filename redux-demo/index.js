// import React from 'react'
// import { connect } from 'react-redux'

const redux = require("redux");


const reducer = (state = { count: -1 }, action) => {
    return {
      count: state.count + 1,
    };
};

const store = redux.createStore(reducer);

//SUBSCRIBE the state change
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({ type: "ADD"});
