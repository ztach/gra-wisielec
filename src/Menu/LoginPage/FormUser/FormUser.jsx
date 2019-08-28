import React from 'react';
import { Formik, Form } from "formik";
import {Link} from 'react-router-dom';

class FormUser extends React.Component {

  state = {
    selected: ''
  }

 onSelect (option) {
    console.log('You selected ', option.label);
    this.setState({
      selected: option.label
    })
  }

  render(){
  const {submitUser,message,onExitLogin,users} = this.props;  

   const usersList = users.map(item => 
    <option value={item.login} label={item.login} />
    )

  
  return (
    <div className="LoginPages">
      <h3 className="LoginPages___title">zaloguj się  </h3>
        <Formik
        onSubmit={value => submitUser(value)}
        validate= { values => {
            let errors = {};
            if (!values.login || !values.password) {
              errors.content = "Required";
            } else if (values.typ.length < 3) {
              errors.content = "Za ktrótki wpis. Minimum 3 znaki...";
            }
          }
        }
        render={({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
          isSubmitting
        }) => (
          <Form className="LoginPages__insert" >
            <label className="LoginPages__insert_label">
                
                <div className="LoginPages__error">{errors.content}</div>
                <div className="LoginPages__error">{message}</div>
                <>
                  <select
                    className="LoginPages__insert_login"
                    type="login"
                    name="login"
                    value={values.login || ''}
                    onChange={handleChange}
                    placeholder="wpisz login">
                    <option value="" label="wybierz login" />
                    {usersList}
                  </select>
                  <input
                    className="LoginPages__insert_password"
                    type="password"
                    name="password"
                    value={values.password || ''}
                    onChange={handleChange}  
                    placeholder="wpisz hasło"
                  />
                </>
            </label>
            <div className="LoginPages__btn">
              <button className="LoginPages__btn_left" type="submit" onClick={()=><Link to="/gra" /> } >
                Zaloguj
              </button>
              <button className="LoginPages__btn_right" type="exit" onClick={onExitLogin}>
                Exit
              </button>
            </div>

          </Form>
        )}
      />
    </div>    
   )
  }
}

export default FormUser;
