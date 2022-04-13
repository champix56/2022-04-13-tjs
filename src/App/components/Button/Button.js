import React from "react";
import styles from "./Button.module.css";
const Button = (props) => {
  console.log(props);
  return (
    <button
      className={styles.Button}
      style={{ backgroundColor: props.bgColor }}
      onClick={(evt) => {
        props.onButtonClicked("une valeur ou pas de valeur au choix");
      }}
    >
      {props.children}
    </button>
  );
};

export default Button;
