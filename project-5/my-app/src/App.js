import logo from "./logo.svg";
import "./App.css";
import Todo from "./Todo";
import { useReducer, useState } from "react";

function reducer(todos, action) {
  switch (action.type) {
    case "ADD_TODO":
      return [...todos, newTodo(action.payload.name)];
    case "SET_TODO":
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete}
        }
        return todo
      });
  }
}
function newTodo(name) {
  return { id: Date.now(), name: name, compelte: false };
}

function App() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");
  const changeHandler = (event) => {
    setName(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    dispatch({ type: "ADD_TODO", payload: { name: name } });
    setName("");
  };
  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <input type="text" value={name} onChange={changeHandler}></input>
      </form>
      {todos.map((todo) => (
        <div>
          <Todo key={todo.id} todo={todo} dispatch={dispatch}/>
        </div>
      ))}
    </div>
  );
}

export default App;
