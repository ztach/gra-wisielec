import React from 'react';

import GetTypeGame from '../MainGame/GetTypeGame/GetTypeGame';
import {Switch, Route } from 'react-router-dom'


const SubPage = (props) => {
  const {user, type, dict} = props;
  console.log('sub menu props',user, type, dict)
  return (  
     <Switch>
      <Route path="/selectGame"  component={() => <GetTypeGame user={user} type={type} dict={dict} />}  />
    </Switch>  
  )
};


export default SubPage;
//<Route exact path="/selectGame"   component={() => <GetTypeGame  type={type} />  } />