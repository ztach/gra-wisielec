import React from 'react';
import ModalOpis from '../../../../szablon/ModalForm'

const OpisGryNaBelce = props => {
  return (
    <div>
    <span> UŻYTE LITERY:  [{props.zapamietajWybraneLitery}] </span>
    <span> ILOŚĆ KLIKNIĘĆ:   ({props.clickCount})           </span>
    <span> BŁĘDNE KLIKNIĘCIA: [{props.clickBadCount}]  </span>   
    <button  className="btnOpis" onClick={props.handleClick } > 
    opis:  </button>
    
    {props.isActive?
      <ModalOpis
              title={"opis hasła"}
              modalActive={props.modalActive}
              handleClick={props.handleClick}
              message={props.wybraneHaslo.gt}
       />
       :
       null
    }
    </div>
  )
}


export default OpisGryNaBelce;
