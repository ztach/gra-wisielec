import React from 'react';
import { Formik, Form } from "formik";

const FormUser = props => {
  const {users,subminUser,onAddUser,logowanie,message} = props;  
  return (
    <div className="LoginPage">
            <h3 className="LoginPage___title">
              {logowanie?
              `zaloguj się`
              :
               `dodaj użytkownika `
              }
            
            </h3>
            <Formik
              initialValues={
                logowanie? null : 
                  { ...users }
              }
              onSubmit={subminUser}
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
                <Form className="LoginPage__insert" >
                  <label className="LoginPage__insert_label">
                      Content *
                      <div className="LoginPage__error">{errors.content}</div>
                      
                      <div className="LoginPage__not_admin">{message}</div>
                      
                      <>
                        <input
                          className="LoginPage__insert_login"
                          type="login"
                          name="login"
                          onChange={handleChange}
                          value={values.login}
                        />
                        <input
                          className="LoginPage__insert_password"
                          type="password"
                          name="password"
                          onChange={handleChange}
                          value={values.password}
                        />
                      </>
                  </label>
                  <div className="LoginPage__btn">
                    <button className="LoginPage__btn_left" type="submit">
                      {logowanie? `Zaloguj` : `Insert` }
                    </button>
                    <button className="LoginPage__btn_right" type="exit" onClick={onAddUser}>
                      Exit
                    </button>
                  </div>

                </Form>
              )}
            />
          </div>    
  )
}


export default FormUser;
