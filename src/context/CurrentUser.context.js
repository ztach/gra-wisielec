import React, { Component } from 'react'
import LoginModalForm from '../LoginPage/LoginModalForm/LoginModalForm';
import * as getUsers from '../helpers/userApi';
import '../LoginPage.scss';
import {SubmitButton,HeaderLogin } from '../helpers/theme';


const CurrentUserContext = React.createContext()

export class CurrentUserProvider extends Component {
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

  logout = () => this.setState({user: null})

  render() {
    const { children } = this.props;

    return (
      <CurrentUserContext.Provider
        value={{
          login: this.login,
          logout: this.logout,
          user: this.state.user
        }}
      >
              <LoginModalForm 
              children={children}
            />

        
      </CurrentUserContext.Provider>
    );
  }
}

export const CurrentUserConsumer = CurrentUserContext.Consumer
