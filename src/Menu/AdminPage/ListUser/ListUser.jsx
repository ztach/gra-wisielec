import React from 'react';

const ListUser = props => {
  const {users} = props;
  const user = users.map(item => 
    <tr key={item.id}> 
          <td>{item.id}</td> 
          <td>{item.login}</td> 
          <td>{item.password}</td> 
          <td>{item.rola}</td>  
    </tr>
    )

  return (
    <div>
        <h2>Użytkownicy: </h2>
        <table className="paleBlueRows">
        
          <thead >
          <tr>
            <th>id</th>
            <th>login</th>
            <th>password</th>
            <th>rola</th>
          </tr>
          </thead>
          <tbody>
          {user}
          </tbody>
        </table>
    </div>
  )
}




export default ListUser;
