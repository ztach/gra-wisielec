import React, {Component} from 'react';
import * as getUsers from '../../helpers/userApi';
import * as getSesions from '../../helpers/sessionApi';

//import * as _ from 'ramda';

import ListUser from './ListUser/ListUser';
import FormUser from './FormUser/FormUser';
import ListSessions from './ListSessions/ListSessions';
import './AdminPage.scss';


class AdminPage extends Component { 
    state = {
      users:[],
      sesions:[],
      rola:1,
      isAddUser:false,
      isGetSesion:false,
      message:'',
      logowanie:false,
    };

  componentDidMount = async () => {  
    if(this.props.user[0].rola===1){
      const users = await getUsers.getAllUsers();
      this.setState({
        users,
        });

        const sesions = await getSesions.getAllSesions() ;
        this.setState({
          sesions
        })
      }
  }

  onGetSesions = () => {
    if(this.props.user[0].rola===1){
      this.setState({
        isGetSesion: !this.state.isGetSesion,
        isAddUser: false
      })
      }else{
        this.setState({
          message:"Nie jesteś adminem!!! widok zabroniony!!!"
        })
      }
  }

  onAddUser = () => {
    if(this.props.user[0].rola===1){
    this.setState({
      isAddUser: !this.state.isAddUser,
      isGetSesion: false
    })
    }else{
      this.setState({
        message:"Nie jesteś adminem!!! edycja zabroniona!!!"
      })
    }
  }

  onInsertUser = async (x) => {
    const {users} = this.state;
    const {login,password} = x;
    const usr = await getUsers.createUser({login,password});
    this.setState({
      users:[...users,usr],
      rola:-1,
    })
  }


  onGetUserInOption = e => {
    const val = e.target.value;
    this.setState({
      user:[{login:val,
        password:'',
        rola:0
      }]
    })
  }

  render () {
    const {users,rola,sesions} = this.state;
    const {user} = this.props;

    const subminUser = values => {
          this.onInsertUser(values);
      };
     

  return (
    <div className="Admin">
      {this.adminHeaderPage()}

      <article>
        {user[0].rola === 1 ? 
        <div>
          {this.addNewUser(users, subminUser)}
          
          {this.state.isGetSesion ?
          <>
            <h2  className="HeaderTextList" >LISTA SESJI UŻYTKOWNIKÓW</h2>
            <div className="SesionList">
              <ListSessions sesions={sesions} />
            </div>
            </>
            : 
            null
          }
          </div>
        : 
        this.state.message === "" ? 
            null 
          : 
            <div className="error_message"> 
              {this.state.message} 
            </div>
        }
      </article>

      {this.adminFooterPage(rola, user)}
    </div>
  );
  }

  adminHeaderPage() {
    return (
      <header className="Admin_Header">
        <nav>
          <h2 className="Admin_Header___title">
            ADMINEM JEST: Staszek Olejnik
          </h2>
          <div>
            <button className="Admin_Header___btn" onClick={this.onAddUser}>
              Dodaj użytkownika
            </button>
            <button className="Admin_Header___btn" onClick={this.onGetSesions}>Pokaż logowania</button>

          </div>
        </nav>
      </header>
    );
  }

  adminFooterPage(rola, user) {
    return <footer>
      <details>
        <summary>Kliknij żeby zobaczyć aktualnie zalogowanego.</summary>
        <div>{rola} </div>
        <div>{user[0].login} </div>
        <div>{user[0].password} </div>
        <div>{user[0].rola} </div>
      </details>
    </footer>;
  }

  addNewUser(users, subminUser) {
    return <div>
      {this.state.isAddUser ?
        <>
          <div className="addUserForm">
            <ListUser users={users} />
          </div>
          <div className="czytoty">
            <FormUser users={users} subminUser={subminUser} onAddUser={this.onAddUser} />
          </div>
        </>
        : null}
    </div>;
  }
}



export default AdminPage;
