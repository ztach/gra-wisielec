import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';

class MenuGameView extends React.Component  {

  state = {
    
  }
  
  render(){

  const {login,rola} = this.props.user[0];
  const {onZalogowac} = this.props;
  
  return (
    <>

      {rola===-1?
      <div className="Panel___up__left_data-nzopis">Jesteś niezalogowany. Gość nie ma uprawnień!!!
      <p className="Panel___up__left_data-niezalogowany">
        <NavLink name='login' to="/login" onClick={onZalogowac } ><span>zaloguj się ... </span></NavLink>
      </p>
      </div>
      :
      <details>
        <summary className="Panel___up__left_data-menu">
            <span  className="Panel___up__left_data-zalogowany">witaj:  {login}</span>
        </summary>
          <p className="Panel___up__left_data-punkt">
          <NavLink name='punktacja' to="/punktacja" >punktacja</NavLink>
        </p>

        <p className="Panel___up__left_data-punkt">
          <NavLink name='selectGame' to={`/selectGame`} >wybierz rodzaj gry</NavLink>
        </p>
      </details>
      }
      
    </>
    )
    }
  };



MenuGameView.propTypes = {
  user: PropTypes.array,
};

MenuGameView.defaultProps = {
  user: [{
    login:'gość',
    rola:-1
  }],
};

export default MenuGameView;
