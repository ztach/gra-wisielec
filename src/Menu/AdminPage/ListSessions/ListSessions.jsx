import React from 'react';

const ListSessions = (props) => {
  const {sesions} = props;
  const sesion = sesions.map(item => 
    <tr key={item.id}> 
          <td>{item.id}</td> 
          <td>{item.begin_date}</td> 
          <td>{item.end_date}</td> 
          <td>{item.login}</td>
          <td>{item.rola}</td>  
          
    </tr>
    )

  return (
        <table className="paleBlueRows">
          <thead >
          <tr>
            <th>id</th>
            <th>dataOd</th>
            <th>dataDo</th>
            <th>login</th>
            <th>rola</th>
          </tr>
          </thead>
          <tbody>
          {sesion}
          </tbody>
        </table>
  )
}




export default ListSessions;
