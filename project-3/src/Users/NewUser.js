import Card from "../UI/Card";
import styles from "./NewUser.module.css";
import Button from "../UI/Button";
import { useState, useRef } from "react";
import ErrorModal from "../UI/ErrorModal";
const NewUser = (props) => {
  const [error, setError] = useState("");
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const addNewUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;
    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({ title: "Invalid", message: "Please Enter Valid" });
      return;
    }
    if (+enteredUserAge < 1) {
      setError({ title: "Invalid", message: "Please Enter Valid" });
      return;
    }
    props.onAddUser(enteredName, enteredUserAge);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };
  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onClick={errorHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addNewUserHandler}>
          <label htmlFor="username">Name</label>
          <input id="username" type="text" ref={nameInputRef}></input>
          <label htmlFor="userage">Age</label>
          <input id="userage" type="number" ref={ageInputRef}></input>
          <Button type="submit">submit</Button>
        </form>
      </Card>
    </div>
  );
};

export default NewUser;