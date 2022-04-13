import React from "react";
import PropTypes from 'prop-types'
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
Button.propTypes={
    children: PropTypes.any.isRequired,
    onButtonClicked: PropTypes.func.isRequired,
    bgColor: PropTypes.string,
    type: PropTypes.string,
}
export default Button;
