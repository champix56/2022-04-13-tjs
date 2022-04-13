import React from "react";
import "./Button.css";
const Button = (props) => {
  console.log(props);
  return (
    <button
      onClick={(evt) => {
        alert("button clicked");
        console.log(evt);
      }}
      className="Button"
    >
      {props.text}
    </button>
  );
};

export default Button;
