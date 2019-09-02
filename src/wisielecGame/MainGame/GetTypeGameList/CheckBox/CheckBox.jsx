import React from 'react';

export const CheckBox = props => {
  return (
    <>
     <input 
        onClick={props.handleCheckChieldElement} 
        type="checkbox" 
        checked={props.checked} 
        name={props.id} 
        value={props.id} 
        count={props.count}        
        onChange={props.onChangeClick}        
      />
    </>
  )
}

export default CheckBox;
