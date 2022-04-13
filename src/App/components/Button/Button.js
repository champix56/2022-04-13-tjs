import React from "react";
import PropTypes from 'prop-types'
import styles from "./Button.module.css";
const Button = (props) => {
  console.log(props);
  return (
    <button
      className={styles.Button}
      style={{ backgroundColor: props.bgColor, color: props.color, ...props.style}}
      onClick={(evt) => {
        props.onButtonClicked("une valeur ou pas de valeur au choix");
      }}
      type={props.type}
    >
      {props.children}
    </button>
  );
};
Button.propTypes={
    children: PropTypes.any.isRequired,
    onButtonClicked: PropTypes.func.isRequired,
    bgColor: PropTypes.string,
    color: PropTypes.string,
    type: PropTypes.string.isRequired,
    style: PropTypes.object,
}
Button.defaultProps={
    onButtonClicked: ()=>{console.log('click par def.');},
    type: 'button',
}
export default Button;
