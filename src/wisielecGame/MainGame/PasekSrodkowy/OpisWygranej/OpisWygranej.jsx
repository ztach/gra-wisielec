import React from 'react';
import * as getGamePoint from '../../../../helpers/gamePointsApi';

class OpisWygranej extends React.Component {


  componentDidMount = () => {
    if (this.props.user[0].rola !== -1){
      this.props.onSetGameTimer(0);
    }
  }


  componentDidUpdate = () => {
    if (this.props.user[0].rola !== -1){
      this.onSaveGamePoints()
    }
  }


  // onSetBeginSession = async (x) => {
  //   const mDate = new Date();
  // }

  onSaveGamePoints = async () => {
    
    const {
      timerStart,
      timerStop,
      wybraneHaslo,
      clickBadCount,
      clickCount,
      user
    } = this.props;
    let dateStart=new Date(timerStart);
    let dateStop=new Date(timerStop);
    let dateDif = 0;
    dateDif = parseFloat((dateStop-dateStart)/1000);

    //let hasloMap = Object.keys(wybraneHaslo).map(item=>wybraneHaslo[item]);
    let params = {
      'play_time':dateDif,
      'count_click':clickCount,
      'bad_click':clickBadCount,
      'user_id':user[0].id,
      'dict_id':Object.values(wybraneHaslo)[0]
    }
    const setGame = await getGamePoint.createGamePoints(params);
    console.log(setGame);
  }


  render () {

  return (
    <div style={{width:'100%',height:'200px', fontSize:'28px' }} >
    <p className="Panel___down__up__sciaga_opis opisOk"> SZUKANE HASŁO TO: <span className="Panel___down__up__sciaga_opis hasloOk"> {this.props.wybraneHaslo.sl}  </span>   </p>
    <p className="Panel___down__up__sciaga_opis opisOk"> KLIKNIĄŁEŚ:  {this.props.clickCount}  razy </p>
    {this.props.clickBadCount<=0? 
        null 
        :
        <p> 
        {this.props.clickBadCount===1? 
            <p className="Panel___down__up__sciaga_opis opisOk">JEDEN STRZAŁ NIECELNY!!!</p>
            : 
            <>
            {this.props.clickBadCount < 7?
            <p className="Panel___down__up__sciaga_opis opisOk"> <span className="ilePudel"> {this.props.clickBadCount} </span> STRZAŁY NIECELNE!!!</p>
            :
            <p className="Panel___down__up__sciaga_opis opisOk">NO TOŚ PRAWIE WISIAŁ</p>
            }
            </>
        } 
        </p> 
    }
    </div>
    )
  }
}
  export default OpisWygranej;
