import React from 'react';
import RysunekKresek from '../RysunekKresek/RysunekKresek';
import PasekSrodkowy from '../PasekSrodkowy/PasekSrodkowy';
import GameOver from '../GameOver/GameOver';    

const ListDict = (props) => {

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
          } = props;


    let haslo = wybraneHaslo.sl === undefined? [] : wybraneHaslo.sl.split('')

  return ( 
        <div className="Panel___down">
        {/* Panel środkowy z buttonem i podpowiedzią */}
            <PasekSrodkowy {...props} />

        {/* end button i podpowiedzią */}
      {gameOver || hasloIsOk? 
      <div className="Panel___down__down">
        <GameOver {...props} />
        </div>
            :
        <div className="Panel___down__down">
            <RysunekKresek {...props}
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
 
export default ListDict;

                // haslo={haslo}  
                // wyborHasla={wyborHasla}
                // isWybraneHaslo={isWybraneHaslo}
                // wybranaLitera={wybranaLitera}
                // wybraneHaslo={wybraneHaslo}
                // clickCount={clickCount}
                // isClicked={isClicked}
                // buttonClicked={buttonClicked}
                // clickBadCount={clickBadCount}
                // tabHaslo={tabHaslo}
                // zapamietajWybraneLitery={zapamietajWybraneLitery}
                // gameOver={gameOver}
                // hasloIsOk={hasloIsOk}
                // powrotDoGry={powrotDoGry}
                // user={user} 
                // onSetGameTimer={onSetGameTimer}

          // powrotDoGry={powrotDoGry} 
          // haslo={haslo}  
          // wyborHasla={wyborHasla}
          // isWybraneHaslo={isWybraneHaslo}
          // wybranaLitera={wybranaLitera}
          // wybraneHaslo={wybraneHaslo}
          // clickCount={clickCount}
          // isClicked={isClicked}
          // buttonClicked={buttonClicked}
          // clickBadCount={clickBadCount}
          // tabHaslo={tabHaslo}
          // zapamietajWybraneLitery={zapamietajWybraneLitery}
          // gameOver={gameOver}
          // hasloIsOk={hasloIsOk}
