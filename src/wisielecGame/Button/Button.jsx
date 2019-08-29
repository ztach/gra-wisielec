import React from 'react';
const Button = props => {

  return (
    <button  
        className="Panel___down__up__btn" 
        onClick={props.buttonClick} >{props.opis}
    </button>
  )
}

export default Button;
