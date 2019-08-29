import React from 'react';
import * as getGamePoint from '../../../../helpers/gamePointsApi';

class OpisWygranej extends React.Component {


  componentDidMount = () => {
    this.props.onSetGameTimer(0);
  }


  componentDidUpdate = () => {
    this.onSaveGamePoints()
  }


  onSetBeginSession = async (x) => {
    const mDate = new Date();
  }

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
    <div style={{width:'100%',height:'200px', fontSize:'35px' }} >
    <p> BRAWO </p>
    <p> SZUKANE HASŁO TO:  "{this.props.wybraneHaslo.sl}"     </p>
    <p> KLIKNIĄŁEŚ:  {this.props.clickCount}  razy            </p>
    {this.props.clickBadCount<=0? 
        null 
        :
        <p> 
        {this.props.clickBadCount===1? 
                `I: 1 RAZ WALNĄŁEŚ W PŁOT` 
                : 
                <>{this.props.clickBadCount < 7?
                `I: ${this.props.clickBadCount} RAZY W PŁOT !!!` 
                :
                `NO TOŚ PRAWIE WISIAŁ`
                }</>
        } 
        </p> 
    }
    </div>
    )
  }
}
  export default OpisWygranej;
