import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
//import ModalOpis from '../../../szablon/ModalForm'
import LoginModalForm from '../../../Menu/LoginPage/LoginModalForm/LoginModalForm'

class MenuGameView extends React.Component  {
  state={
    isActive:false,
    modalActive:false,
  }

  handleClick = () =>  { 
    this.setState({
      isActive:!this.state.isActive,
      modalActive:!this.state.modalActive
    })
  }


    
  render(){

  const {login} = this.props.user[0];
  const {isLogged} = this.props;

  return (
    <>

      {!isLogged?
      <div className="Panel___up__left_data-nzopis">Jesteś niezalogowany. Gość nie ma uprawnień!!!
      <p className="Panel___up__left_data-niezalogowany">
          <>
          <button  className="btnOpis" onClick={this.handleClick } > 
          zaloguj się </button>

          {this.state.isActive?
            <LoginModalForm
                    title={"opis hasła"}
                    modalActive={this.state.modalActive}
                    handleClick={this.handleClick}
                    {...this.props}
             />
             :
             null
          }
          </>
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
