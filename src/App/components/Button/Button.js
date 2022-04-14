import React, { useState } from "react";
import PropTypes from 'prop-types'
import styles from "./Button.module.css";

const Button = (props) => {
  //console.log(props);
  const [isClicked, setIsClicked] = useState(false);
 
  return (
    <button
      className={`${styles.Button}${!isClicked?'':' '+styles.clicked}`}
      style={{ backgroundColor: props.bgColor, color: props.color, ...props.style}}
      onClick={(evt) => {
        setIsClicked(true)
        
        //un etat de retard du a l'async de setIsClicked
        console.log(isClicked);

        props.onButtonClicked("une valeur ou pas de valeur au choix");
      }}
      type={props.type}
    >
      {props.children}<br/>{isClicked.toString()}
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
