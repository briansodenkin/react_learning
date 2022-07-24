import styles from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/Carticon";
import { useContext, useEffect, useState } from "react";
import ChartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const [highlightButton, setHighlightButton] = useState(false);
  const cartCtx = useContext(ChartContext);
  const numberOfItem = cartCtx.items.reduce((cur, item) => {
    return cur + item.amount;
  }, 0);
  const { items } = cartCtx;
  const buttonClass = `${styles.button} ${highlightButton ? styles.bump : ""} `;
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setHighlightButton(true);
    const timer = setTimeout(() => {
      setHighlightButton(false);
    }, 300);
    
    return () => {
      clearTimeout(timer)
    }
  }, [items]);

  return (
    <button className={buttonClass} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfItem}</span>
    </button>
  );
};

export default HeaderCartButton;
