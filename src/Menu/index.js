import React, { PureComponent } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import NaviBar from './NaviBar/NaviBar';
import './Menu.scss';
import Pages from './Pages/Pages';
import * as getUsers from '../helpers/userApi';
import * as getSession from '../helpers/sessionApi';

class MyMenu extends PureComponent { 
    state = {
      hasError: true,
      myLogin:null,
      rola:1,
      isAddUser:false,
      message:'',
      isLogged:false,
      user:[{
        id:2,
        login:'gość',
        password:'gosc',
        rola:-1
      }],
      modalActive:false,
      sesionIsSaved:false,
      userSession:[{
        idSesion: 0,
        user_id:'',
        begin_date:''
      }],
      addedType:[],
  }

  onAddedTypeState = (x) => {
    this.setState({
      addedType:x
    })
  }
  

  
  componentWillUnmount = () => {
    this.setState({
      dict:[],
    })
   }

    onZalogowac = () => {
      this.setState({
        modalActive: true,
        message:''
      })
    }

    onSetBeginSession = async (x) => {
      const mDate = new Date();
      let params = {
        user_id:x,
        begin_date:mDate.toLocaleString('sv-SE')
      }
      const setSession = await getSession.createSesion(params);
      this.setState({
        userSession:[{
          idSesion: setSession.id,
          user_id:x,
          begin_date:mDate.toLocaleString('sv-SE')
        }]
        
      })
    }

    onSetEndSession = async (x) => {
      const mDate = new Date();
      let params = {
        end_date:mDate.toLocaleString('sv-SE')
      }
      await getSession.updateSesion(x,params);
    }



    onLogowanie = async x => {
    
    const {login,password} = x;
    const loginId = await getUsers.getUserLogin(login);
    const passwordId = await getUsers.getUserPassword(password);
    
    this.setState({
      message:"",
      isAddUser: false
    })
    if(loginId.length >1 ){
      this.setState({
        message:"wpisz login"
      })
    } else if(passwordId.length >1 ){
      this.setState({
        message:"wpisz hasło"
      })
    } else  if(loginId.error === 1 && passwordId.error === 1){
      this.setState({
        message:"Nie istnieje taki login lub hasło"
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

      if(this.state.userSession[0].idSesion > 0){
        this.onSetEndSession(this.state.userSession[0].idSesion);
      }

        this.setState({
          user:loginId,
          rola: loginId[0].rola,
          message:"Zostałeś zalogowany",
          isLogged:!this.state.isLogged,
          modalActive:false
        })

        this.onSetBeginSession(loginId[0].id);

     } else {
        this.setState({
          message:"Zły login lub hasło"
        })
     }
  }

  onWyLogowanie = async x => {
    this.setState({
      user:[{
        id:2,
        login:'guest',
        password:'guest',
        rola:-1
      }],
      rola:-1,
      modalActive:false
    })
  }

  onExitLogin = () => {
    this.setState({
      modalActive:false,
      logowanie:false
    })
  }

  
  render () {
    const {userSession,
            modalActive, 
            message, 
            isLogged, 
            user} = this.state;

  return (
      <Router basename={process.env.PUBLIC_URL} >
      <div className="SplitPane"> 
      <header className="SplitPane-menu">
        <div className="head">
        {<NaviBar/>}
        </div>

        <div className="menuHeader">
          {<Header onZalogowac={this.onZalogowac} isLogged={isLogged} user={user} />}
        </div>
      </header>

      
      <main  className="SplitPane-main">
        {<Pages onAddedTypeState={this.onAddedTypeState} addedType={this.state.addedType} onZalogowac={this.onZalogowac} userSession={userSession} user={user} onLogowanie={this.onLogowanie} modalActive={modalActive}  message={message} isLogged={isLogged} onExitLogin={this.onExitLogin} />}
      </main>
      <footer className="SplitPane-footer" >
        {<Footer  user={user} />}
      </footer>
      </div>
      </Router>
    )
  }
}


export default MyMenu;
