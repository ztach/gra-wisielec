import React, { PureComponent } from 'react';
import OpisWygranej from './OpisWygranej/OpisWygranej';
import OpisGryNaBelce from './OpisGryNaBelce/OpisGryNaBelce'
import Button from '../../Button/Button';


class PasekSrodkowy extends PureComponent {

  state={
    isActive:false,
    modalActive:false,
  }

  handleClick = () =>  { 
    this.setState({
      isActive:!this.state.isActive,
      modalActive:!this.state.modalActive
    })
  }

  render () {

  const {wyborHasla,
        powrotDoGry,
        isWybraneHaslo,
        gameOver,
        hasloIsOk
      } = this.props;
  
  
  return(
  <div className="Panel___down__up">
  <div className="Panel___down__up__sciaga">
      {!isWybraneHaslo? 
      <div className="Panel___down__up__sciaga_message" >Wybierz hasło!!! </div>
      :
      <div className="Panel___down__up__sciaga_opis" >
        {gameOver? null :
            <>
            {hasloIsOk?
            <OpisWygranej {...this.props} />
              :
              <OpisGryNaBelce 
                      isActive={this.state.isActive}
                      modalActive={this.state.modalActive}
                      handleClick={this.handleClick}
                      {...this.props} 
              />
              }
              </>
            }
          </div>
          }
      </div>
      {gameOver?
        <Button opis={"POWRÓT DO GRY"} buttonClick={powrotDoGry} />
      :
        <Button opis={"WYBIERZ HASŁO"} buttonClick={wyborHasla} />
      }    
  </div>

  )
}
  

}

export default PasekSrodkowy;
