import React, { PureComponent } from 'react';
import * as getGamePoint from '../../../helpers/gamePointsApi';
//import '../../../../node_modules/@fortawesome/fontawesome-free/css/all.min.css'
import TabListSzablon from '../../../szablon/TabListSzablon';
import './Punktacja.scss';
import {Link} from 'react-router-dom';


class Punktacja extends PureComponent { 
  
  state = {
      hasError: false,
      points:['','','','','',''],  
  }

  componentDidMount = async () => {
    const {id,rola} = this.props.user[0];
    
    let points = [];
    
    if(id !== undefined) {

      if(id > 0 && rola === 0 ){
        points = await getGamePoint.getGamePointsId(id);
      }

      if(rola === 1 ){
        points = await getGamePoint.getGamePointsId();
      }

    }

    this.setState({
      points,
      })

 }


  render () {
    const {login,rola} = this.props.user[0];
    const {points} = this.state;
    
    const tbodyr = points.map((item,idx) => 
      <tr key={idx} >
            <td> {item.id} </td>
            <td> {item.count_click} </td>
            <td> {item.bad_click} </td>
            <td> {item.play_time} </td>
            <td> {item.gracz} </td>
            <td> {item.haslo} </td>
            <td> {item.podpowiedz} </td>
      </tr>
    )

    const theader =[
        'id',
        'wszystkie litery',
        'błędne litery',
        'czas gry',
        'gracz',
        'haslo',
        'podpowiedź']

    return (
      <div className="Punktacja">
        {rola === -1 ? 
        <div className="Punktacja___opis"> Witaj gościu. Tobie nie liczy się punktacja. Musisz się zalogować.... </div>
        :
        <>
        {rola === 1?
        <div className="Punktacja___zalogowany">
        WITAJ ADMINIE: <span className="Punktacja___zalogowany-login"> {login} </span>
        </div>
        :
        <div className="Punktacja___zalogowany">
        TWOJE WYNIKI: <span className="Punktacja___zalogowany-login"> {login} </span>
        </div>
        }
        <TabListSzablon tbodyr={tbodyr}  theader={theader} />    
        </>
        
        }
      <div className="btnBack">
        <Link  to ='/gra'>
          <i className="zmdi zmdi-arrow-left"></i>
        </Link>


      </div>
      </div>
    
    );
  }
}


export default Punktacja;

/* <div style={{fontSize:"20px", paddingTop:"30px"}} > 
<p><i className="zmdi zmdi-pin animated infinite wobble zmdi-hc-fw"></i>       wobble</p> 
<p style={{padding:"30px 0"}}><i className="zmdi zmdi-directions-bike animated infinite fadeInLeft zmdi-hc-fw"></i> fadeInLeft</p> 
<p><i className="zmdi zmdi-notifications-active animated infinite pulse zmdi-hc-fw mdc-text-blue"></i> pulse</p> </div>
<p style={{fontSize:"40px", padding:"10px"}}>
<i className="zmdi zmdi-rotate-right zmdi-hc-spin"></i>
</p>
<i className="far fa-arrow-alt-circle-up"></i>
<i className="far fa-long-arrow-alt-down"></i> 
*/

