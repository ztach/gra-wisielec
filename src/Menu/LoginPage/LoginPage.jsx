import React, {Component} from 'react';
import LoginModalForm from './LoginModalForm/LoginModalForm';
//import * as getUsers from '../../helpers/userApi';
import './LoginPage.scss';

export const myUser = null; 

export default class LoginPage extends Component { 

    state = {
      isAddUser:false,
      // user:[{
      //   login:'gosc',
      //   password:'gosc',
      //   rola:-1
      // }],
  }


  activateModal = () => {
    this.setState({ modalActive: true,message:'' });
  };

  deactivateModal = () => {
    this.setState({ modalActive: false });
  };

  
  getApplicationNode = () => {
    return document.getElementById('application');
  };

  render () {
    const {
            onExitLogin,
            onLogowanie,
            modalActive,
            message,
            isLogged,
            userSession,
            user
            } = this.props;

    return (
      <>
      <LoginModalForm 
                  modalActive={modalActive}
                  isLogged={isLogged} 
                  submitUser={onLogowanie} 
                  message={message} 
                  onExitLogin={onExitLogin} 
                  activateModal={this.activateModal}
                  deactivateModal={this.deactivateModal}
                  getApplicationNode={this.getApplicationNode}
      />

     {this.UserFooter(user,userSession)}
      
      </>
      );
  }


  UserFooter(user,userSession) {
    const {login,id} = user[0];
    const rolaId = user[0].rola;
    const {idSesion,begin_date} = userSession[0];
    

    return <footer>
      <details>
        <summary>Kliknij żeby zobaczyć aktualnie zalogowanego.</summary>
        <div>ROLA ID: {rolaId} = {rolaId===-1? `GOŚĆ` : rolaId===0? `UŻYTKOWNIK` : `ADMINISTRATOR` } </div>
        <div>LOGIN: {login} </div>
        <div>ID: {id} </div>
        <div>ID SESJA: {idSesion} </div>
        <div>POCZĄTEK SESJI: {begin_date} </div>
      </details>
    </footer>;
  }

}


