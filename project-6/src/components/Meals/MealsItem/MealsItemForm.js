import styles from "./MealsItemForm.module.css";
import Input from "../../UI/Input";
import { useRef, useState } from "react";
const MealsItemForm = (props) => {
  const [inValid, setInvalid] = useState(true);
  const InputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = InputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    if (
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5 ||
      enteredAmount.trim().length === 0
    ) {
      setInvalid(false);
    }
    props.onAddToCart(enteredAmountNumber);
  };
  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input
        ref={InputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!inValid && <p>Please Enter valid number</p>}
    </form>
  );
};

export default MealsItemForm;
