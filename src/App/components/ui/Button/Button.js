import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types'
import styles from "./Button.module.css";

const Button = (props) => {
  //console.log(props);
  const [isClicked, setIsClicked] = useState(false);
  // fonction de cycle de vie didMount, didUpdate sur 
  //la ou les valeurs observé dans le tableau de dependance (dernier arg)
  //
  //pour un componentDidMount uniquement , 
  //ne rien mettre dans le tableau de dependances car "rien" n'est jamais mis à jour
 useEffect(() => {
    if(isClicked===true)
    {
      //execution differée d'un fonction
      setTimeout(()=>{
        console.log(this);
        setIsClicked(false);
      },200)
    }
    //retour de la fonction pour le willUnmount
  /*return () => {
    console.log('demontage de la valeur inspectée / composant')
  }*/
 }, [isClicked])
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
