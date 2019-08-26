import React, {Component} from 'react';
import LoginModalForm from './LoginModalForm/LoginModalForm';
import * as getUsers from '../helpers/userApi';
import './LoginPage.scss';
import {SubmitButton,HeaderLogin } from '../helpers/theme';


class LoginPage extends Component { 

    state = {
      users:[],
      rola:1,
      isAddUser:false,
      message:'',
      logowanie:false,
      user:[{
        login:'gosc',
        password:'gosc',
        rola:-1
      }],
      modalActive:false
  }

  componentDidMount = () => {
    this.onWyLogowanie();
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

  onZalogowac = () => {
    this.setState({
      logowanie:!this.state.logowanie,
      modalActive: true,
      message:''
    })
  }

    onLogowanie = async x => {
    
    const {login,password} = x;
    const loginId = await getUsers.getUserLogin(login);
    const passwordId = await getUsers.getUserPassword(password);

    this.setState({
      message:"",
      isAddUser: false
    })
    
    if(loginId.error === 1 && passwordId.error === 1){
      this.setState({
        message:"Nie istnieje taki login i hasło"
      })
    }else if(loginId.error === 1 ){
      this.setState({
        message:"Nie istnieje taki login"
      })
    } else if(passwordId.error === 1 ){
      this.setState({
        message:"Nie istnieje takie hasło"
      })
    } else  if(loginId.login === passwordId.login && loginId.password === passwordId.password  ){
        this.setState({
          user:loginId,
          rola: loginId[0].rola,
          message:"Zostałeś zalogowany",
          logowanie:false,
          modalActive:false
        })
     } else {
        this.setState({
          message:"Zły login lub hasło"
        })
     }
  }

  onWyLogowanie = async x => {
    this.setState({
      user:[{
        login:'gosc',
        password:'gosc',
        rola:-1
      }],
      rola:-1,
      modalActive:false
    })
  }

  onExitLogin = x => {
    this.setState({
      modalActive:false,
      logowanie:false
    })
  }
  
  render () {
    const {user,rola,message,logowanie,modalActive} = this.state;
    return (
      <>
     
      <LoginModalForm 
                  modalActive={modalActive}
                  logowanie={logowanie} 
                  submitUser={this.onLogowanie} 
                  message={message} 
                  onExitLogin={this.onExitLogin} 
                  activateModal={this.activateModal}
                  deactivateModal={this.deactivateModal}
                  getApplicationNode={this.getApplicationNode}
  
      />

        {this.LoginHeader()}
        
        {this.UserFooter(rola,user)}

        
      </>
      );
  }

  UserFooter(rola, user) {

    const {login,password} = user[0];
    const rolaId = user[0].rola

    return <footer>
      <details>
        <summary>Kliknij żeby zobaczyć aktualnie zalogowanego.</summary>
        <div>ROLA ID: {rola} = {rolaId===-1? `GOŚĆ` : rolaId===0? `UŻYTKOWNIK` : `ADMINISTRATOR` } </div>
        <div>LOGIN: {login} </div>
        <div>PASSWORD: {password} </div>
      </details>
    </footer>;
  }


  LoginHeader() {
    return <> <HeaderLogin >
      <nav>
        <h2 className="Login__title">Panel logowania</h2>
        
      </nav>
    </HeaderLogin>
    <div>
    <SubmitButton onClick={this.onZalogowac}>Zaloguj</SubmitButton>
    <SubmitButton onClick={this.onWyLogowanie}>Wyloguj</SubmitButton>
  </div>
  </>
  }
}




export default LoginPage;
