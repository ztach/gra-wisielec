import React from 'react';
import { Formik, Form } from "formik";

const FormUser = props => {
  const {submitUser,message,onExitLogin} = props;  
  return (
    <div className="LoginPages">
            <h3 className="LoginPages___title">zaloguj się  </h3>
            <Formik
             
              onSubmit={value => submitUser(value) }
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
                        <input
                          className="LoginPages__insert_login"
                          type="login"
                          name="login"
                          value={values.login || ''}
                          onChange={handleChange}
                          placeholder="wpisz login"
                        />
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
                    <button className="LoginPages__btn_left" type="submit"  >
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


export default FormUser;
