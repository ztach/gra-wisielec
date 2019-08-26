import React from 'react';

export const CheckBox = props => {
  return (
    <>
     <input 
        onClick={props.handleCheckChieldElement} 
        type="checkbox" 
        checked={props.isChecked} 
        name={props.id} 
        value={props.id} />
    </>
  )
}

export default CheckBox;
