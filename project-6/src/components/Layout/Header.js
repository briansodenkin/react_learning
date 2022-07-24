import React from "react";
import styles from "./Header.module.css";
import mealsImage from "../../assets/meals.jpeg";
import HeaderCartButton from "./HeaderCartButton.js";
const Header = (props) => {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <h1>React Meals</h1>
        <HeaderCartButton onClick={props.onShow}/>
      </header>
      <div className={styles['main-image']}>
        <img src={mealsImage} alt="Many food" />
      </div>
    </React.Fragment>
  );
};

export default Header;
