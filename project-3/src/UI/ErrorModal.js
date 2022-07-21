import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import Button from "./Button";
import styles from "./ErrorModal.module.css";

const Overlay = (props) => {
  return <div className={styles.backdrop}></div>;
};
const Modal = (props) => {
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>{props.title}</h2>
      </header>
      <div>
        <p className={styles.content}>{props.message}</p>
      </div>
      <footer className={styles.actions}>
        <Button onClick={props.onClick}>Okay</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Overlay />,
        document.getElementById("overlay-root")
      )}
      {ReactDOM.createPortal(
        <Modal title={props.title} message={props.message} />,
        document.getElementById("modal-root")
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
