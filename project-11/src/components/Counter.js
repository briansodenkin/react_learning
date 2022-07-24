// import { Component } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { counterActions } from "../store";
import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch()
  const counter = useSelector((state) => {
    return state.counter.counter;
  });
  const showCounter = useSelector((state) => {
    return state.counter.showCounter;
  });

  const toggleCounterHandler = () => {
    // dispatch({type: "SHO"})
    dispatch(counterActions.toggleCounter())
  };

  const addCounterHandler = () =>{
    dispatch(counterActions.increment())
  }
  const subCounterHandler = () =>{
    dispatch(counterActions.decrement())
  }
  const increaseConuterHandler = () =>{
    dispatch(counterActions.increase(10))
  }
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <button onClick={addCounterHandler}>Add Counter</button>
      <button onClick={subCounterHandler}>Sub Counter</button>
      <button onClick={increaseConuterHandler}>Increase by 5</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

// class Counter extends Component {
//   addCounterHandler(){
//     this.props.increment()
//   }
//   subCounterHandler(){
//     this.props.decrement()
//   }
//   toggleCounterHandler(){

//   }
  
//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <button onClick={this.addCounterHandler.bind(this)}>Add Counter</button>
//         <button onClick={this.subCounterHandler.bind(this)}>Sub Counter</button>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }
// const mapStateToProps = (state) => { 
//   return {
//     counter: state.counter 
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({type:"ADD"}),
//     decrement: () => dispatch({type:"SUB"})
//   }
// }

// export default connect(mapStateToProps,mapDispatchToProps)(Counter);

export default Counter;
