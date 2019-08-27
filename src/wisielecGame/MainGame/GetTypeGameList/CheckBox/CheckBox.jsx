import React from 'react';

export const CheckBox = props => {
  return (
    <>
     <input 
        onClick={props.handleCheckChieldElement} 
        type="checkbox" 
        checked={props.isChecked} 
        name={props.id} 
        value={props.id} 
        count={props.count}        
        onChange={item=>item.value}
      />
    </>
  )
}

export default CheckBox;
