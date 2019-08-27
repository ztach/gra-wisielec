import React from 'react';
import { Link } from 'react-router-dom'
import TabListSzablon from '../../../szablon/TabListSzablon';
import CheckBox from './CheckBox/CheckBox';
import './GetTypeGameList.scss';

const GetTypeGameList = props => {
const {
      type,
      checkTab,
      addedTypes,
      onAceptType,
      handleCheckChieldElement,
        } = props;

  const theader = ['Id','Hasło','Zaznacz','Ilość pytań'];
  

  const tbodyr = type.map(item => 
  <tr key={item.id} >
    <td  className="GetTypeGame___body_id">{item.id}</td>

    <td className="GetTypeGame___body_typ"> {item.typ} </td>
    <td className="GetTypeGame___body_del">
     { <CheckBox 
          checkTab={checkTab} 
          handleCheckChieldElement={handleCheckChieldElement} 
          {...item} 
        />
      }
    </td>
    <td className="GetTypeGame___body_del">
      {item.count}
    </td>
    </tr>
    ) 

    const mapa = addedTypes.map(item=>item+',')

return (
      <div className="GetTypeGame___up">
      <h3>Wybierz hasła do gry</h3>
        <TabListSzablon tbodyr={tbodyr}  theader={theader} />
      <h3>Wybrałeś do gry:  {mapa}</h3>
      <button className="GetTypeGame___btn" onClick={onAceptType}><Link to="/gra"> Zaakceptuj wybór </Link></button>
    </div>
    );
}



export default GetTypeGameList;
