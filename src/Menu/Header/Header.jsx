import React from 'react';
import {NavLink} from 'react-router-dom';
import './Header.scss';
import {SubmitButton} from '../../helpers/theme'

const Header = (props) => {
  const {onZalogowac,user,isLogged} = props;

  const menuList = [
    {name:'info',path:'/',style:'info_selected',exact:true},
    {name:'gra',path:'/gra',style:'gra_selected'},
    {name:'konfiguracja',path:'/konfiguracja',style:'ustawienia_selected'},
    {name:'kontakt',path:'/contact',style:'contact_selected'},
//    {name:'hooki',path:'/hooki',style:'hooki_selected'},
    {name:'panel admina',path:'/admin',style:'admin_selected'},
  
  ]
  
  const menu = menuList.map(item => (
    <li className="header___li" key={item.name}>
        <NavLink className="header___li___item" to={item.path}
        exact={item.exact? item.exact : false }
        >
            {item.name}
        </NavLink>
    </li>
    )
)

return (
  <>
  <nav className="header___nav">
    <ul className="header___ul">
    {menu}
    <NavLink to="/login">
     <SubmitButton  type="button" onClick={onZalogowac } >
          {user[0].rola === -1 && isLogged? `zaloguj` : user[0].login }
    </SubmitButton>
    </NavLink>
    
    </ul>
    
  </nav>
  </>
)
};


export default Header;
