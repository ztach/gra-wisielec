import React from 'react';
import { Route,Switch } from 'react-router-dom';
import GetData from '../../configGame/GetData/GetData';
import HomePage from '../HomePage/HomePage';
import MainGame from '../../wisielecGame/MainGame/MainGame';
import ContactPage from '../ContactPage/ContactPage';
import AdminPage from '../AdminPage/AdminPage';
import Hooki from '../../Hooki/Index'
import LoginPage from '../LoginPage/LoginPage';
import Punktacja from '../../wisielecGame/MainGame/Punktacja/Punktacja';
import GetTypeGame from '../../wisielecGame/MainGame/GetTypeGame/GetTypeGame';

//import Zaloguj from '../../Zaloguj/Zaloguj' 

const Pages = props => {
const {
      onExitLogin,
      onLogowanie,
      message,
      isLogged,
      modalActive,
      user,
      userSession,
      onZalogowac,
      addedType,
      onAddedTypeState
    } = props;
    
  return (
    <Switch>
      <Route path="/" exact component={() => <HomePage user={user} />} />
      <Route path="/gra"  component={() => <MainGame addedType={addedType} onZalogowac={onZalogowac} user={user} />}  />
      <Route path="/konfiguracja" exact component={() => <GetData user={user} />}/>
      <Route path="/contact"  component={() => <ContactPage user={user} />} />
      <Route path="/hooki"  component={Hooki} />
      <Route path="/login" component={() => <LoginPage userSession={userSession} user={user} modalActive={modalActive} onLogowanie={onLogowanie} message={message} isLogged={isLogged} onExitLogin={onExitLogin} /> } />
      <Route path="/admin"   component={() => <AdminPage user={user} />  } />
      <Route path="/punktacja"   component={() => <Punktacja user={user} />  } />
      <Route path="/selectGame"  component={() => <GetTypeGame onAddedTypeState={onAddedTypeState} addedType={addedType} user={user} />}  />
    </Switch>
      );
}
 
export default Pages;

/**
 *       
      
      <Route path="/login" component={LoginPage} />    

 */