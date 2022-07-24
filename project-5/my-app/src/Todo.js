const Todo = (props) => {
  console.log(props.todo.id)
  console.log(props.todo.complete)
  return (
    <>
      <span style={{ color: props.todo.complete ? "red" : "black" }}>
        {props.todo.name}
      </span>
      <button
        onClick={() =>
          props.dispatch({ type: "SET_TODO", payload: {id: props.todo.id} })
        }
      >
        toggle
      </button>
      <button>delete</button>
    </>
  );
};

export default Todo;
