import React, { PureComponent } from 'react';
//import ListDict from '../ListDict/ListDict';
import RysunekKresek from '../RysunekKresek/RysunekKresek';
import PasekSrodkowy from '../PasekSrodkowy/PasekSrodkowy';
import GameOver from '../GameOver/GameOver';    

import  './CreatePanelGame.scss';

class CreatePanelGame extends PureComponent {

render() {

  const { 
    wybraneHaslo,
    wybranaLitera,
    zapamietajWybraneLitery,
    clickCount,
    isClicked,
    buttonClicked,
    clickBadCount,
    tabHaslo,
    gameOver,
    hasloIsOk,
  } = this.props;

  let haslo = wybraneHaslo.sl === undefined? [] : wybraneHaslo.sl.split('')

return (
  <div className="Panel___down">
  {/* Panel środkowy z buttonem i podpowiedzią */}
      <PasekSrodkowy {...this.props} />

  {/* end button i podpowiedzią */}
      {gameOver || hasloIsOk? 
      <div className="Panel___down__down">
            <GameOver {...this.props} />
      </div>
      :
      <div className="Panel___down__down">
          <RysunekKresek 
              zapamietajWybraneLitery={zapamietajWybraneLitery}
              haslo={haslo} 
              wybranaLitera={wybranaLitera} 
              clickCount={clickCount}
              isClicked={isClicked}
              buttonClicked={buttonClicked}
              clickBadCount={clickBadCount}
              tabHaslo={tabHaslo}
          />
      </div>
}
  </div>
    ); 
  }
}


export default CreatePanelGame;

/**
 * 
// const {wyborHasla,
//       wybraneHaslo,
//       wybranaLitera,
//       zapamietajWybraneLitery,
//       isWybraneHaslo,
//       clickCount,
//       isClicked,
//       buttonClicked,
//       clickBadCount,
//       tabHaslo,
//       gameOver,
//       hasloIsOk,
//       powrotDoGry,
//       maxPicturesCount,
//       user,
//       onSetGameTimer
//       } = this.props;
 */
/**
 *             // wyborHasla={wyborHasla} 
            // wybraneHaslo={wybraneHaslo} 
            // wybranaLitera={wybranaLitera}
            // zapamietajWybraneLitery={zapamietajWybraneLitery}
            // isWybraneHaslo={isWybraneHaslo}
            // clickCount={clickCount}
            // isClicked={isClicked}
            // buttonClicked={buttonClicked}
            // clickBadCount={clickBadCount}
            // tabHaslo={tabHaslo}
            // gameOver={gameOver}
            // hasloIsOk={hasloIsOk}
            // powrotDoGry={powrotDoGry}
            // maxPicturesCount={maxPicturesCount}
            // user={user} 
            // onSetGameTimer={onSetGameTimer}

 */