import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GetTypeGameList from '../GetTypeGameList/GetTypeGameList';
import * as getAllType from '../../../helpers/typeApi';

import './WyborTypuGry.scss';





class GetTypeGame extends Component { 

  state = {
    isAddedType:false,
    checkTab:false,
    dict:[], 
    type:[],
    isTypeLoading:false,
    addedTypes:[],
    whoIsChcked:[],
    };
 
  componentDidMount = async () => {

     const type = await getAllType.getAllTypes();
    
    this.setState({
      type,
      isTypeLoading:true,
      addedTypes:this.props.addedType
      }) 
  
      let newType = []
     
      for (let index = 0; index < this.state.type.length; index++) {
        const element = this.state.type[index];
        let x = {
          id:element.id,
          typ:element.typ,
          isChecked:false
        }
        newType.push(x);
      }


    for (let j = 0; j < newType.length; j++) {
      let jTyp=newType[j].id;


      for (let i = 0; i < this.props.addedType.length; i++) {
          let iProp=this.props.addedType[i];
          if (iProp === jTyp){
            newType.map(item => item.id === jTyp ? item.isChecked=true : null  )
          }
      }
    }
    this.setState ({
      type:[...newType]
    })
    
  }



  handleCheckChieldElement = (event) => {
    const {type} = this.state;

    type.forEach(item => {
      
       if (parseInt(item.id)===parseInt(event.target.value)){
          this.onClickAddType(event);
          item.isChecked =  event.target.checked
        }
    })
    this.setState({type: type})
  }

  onClickAddType = e => {
    const chd = e.target.checked;
    const cht = this.state.checkTab;
    const id = parseInt(e.target.name);
    const {addedTypes} = this.state;
    let idx = addedTypes.findIndex(item => parseInt(item) === id );
    
    if(idx===-1 && chd){
      console.log('name,checked,checktab',id,chd,cht);
      this.setState({
        checkTab:true,
        isAddedType:true,
        addedTypes:[...addedTypes,id].sort((a,b) => a-b )
      })
      
    }else{
      this.setState({
        addedTypes: this.state.addedTypes.filter(item => parseInt(item) !== id ),
        checkTab:false,
      })
    }
    
  }


  onAceptType = () => {
    const {addedTypes} = this.state;
    this.props.onAddedTypeState(addedTypes);
}

render () {
    const {user} = this.props;
    
    if(user[0].rola === -1){
      return <div>wejście nieuprawnione</div>
    }
    console.log('gettype ',this.state.type);
   
    return (
      <div className="GetTypeGame">
          <GetTypeGameList 
              handleCheckChieldElement={this.handleCheckChieldElement}
              type={this.state.type} 
              checkTab={this.state.checkTab}
              addedTypes={this.state.addedTypes}
              addedType={this.props.addedType}
              whoIsChcked={this.state.whoIsChcked}
              onAceptType={this.onAceptType}
              
          />

      </div>
    );
  }
}

GetTypeGame.propTypes = {
    user:PropTypes.array,
    type:PropTypes.array,
    dict:PropTypes.array
};

GetTypeGame.defaultProps = {
  // bla: 'test',
  user:[{
    id: 2,
    login: "gość",
    password: "gosc",
    rola: -1
  }],
  type:[{
    id: 0,
    typ: ""
  }],
  dict:[{
    id: 0,
    sl: "",
    typ: "",
    gt: "",
    polecenie: "",
  }]
};

export default GetTypeGame;
