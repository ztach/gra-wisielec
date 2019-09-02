import React, { Component } from 'react';
//import PropTypes from 'prop-types';
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
    sumCountArr:[],
    sumCount:0,
    checked:false
   };
 
  componentDidMount = async () => {

     const type = await getAllType.getAllTypesCount();
    
    this.setState({
      type,
      isTypeLoading:true,
      addedTypes:this.props.addedType,
      sumCountArr:this.props.sumCountArr,
      sumCount:this.props.sumCount,
      }) 
  
      let newType = []
     
      for (let index = 0; index < this.state.type.length; index++) {
        const element = this.state.type[index];
        let x = {
          id:element.id,
          typ:element.typ,
          count:element.dictcount,
          checked:false
        }
        newType.push(x);
      }

    for (let j = 0; j < newType.length; j++) {
      let jTyp=newType[j].id;


      for (let i = 0; i < this.props.addedType.length; i++) {
          let iProp=this.props.addedType[i];
          if (iProp === jTyp){
            newType.map(item => item.id === jTyp ? item.checked=true : null  )
          }
      }
    }
    this.setState ({
      type:[...newType],
    })

  }

//  componentWillUnmount = () => {
    //const {sumCount,sumCountArr} = this.state;
    //console.log(`wymontowany count ${sumCount} sum ${sumCountArr}`)
    //tu zapisywać dane do zapamiętania w głównym stejcie
  //}



  handleCheckChieldElement = (event) => {
    const {type} = this.state;

    type.forEach(item => {
      
       if (parseInt(item.id)===parseInt(event.target.value)){
          this.onClickAddType(event);
          item.checked =  event.target.checked
        }
    })
    this.setState({type: type})
  }

  onClickAddType = e => {
    const {type,addedTypes} = this.state;
    const chd = e.target.checked;
    const id = parseInt(e.target.name);

    let idx = addedTypes.findIndex(item => parseInt(item) === id );
    let typObj = type.find(item => parseInt(item.id) === id );
    let count = Object.keys(typObj).map(item=>typObj[item]);

    if(idx===-1 && chd){
      this.setState({
        checkTab:true,
        isAddedType:true,
        addedTypes:[...addedTypes,id].sort((a,b) => a-b )
      })
      this.onSumaPytanArray(count[2])
    }else{
      this.setState({
        addedTypes: this.state.addedTypes.filter(item => parseInt(item) !== id ),
        checkTab:false,
      })
      this.onSumaPytanArray(-count[2])
    }
  }

  onAceptType = () => {
    const {addedTypes, sumCountArr,sumCount} = this.state;
    this.props.onAddedTypeState(addedTypes);
    this.props.onSumaPytanArray(sumCountArr,sumCount)
  }

  onSumaPytanArray = (x) => {
    this.setState({
      sumCountArr: [...this.state.sumCountArr,x],
      sumCount:this.state.sumCount + x
    })
  }

  onChangeClick = e => {
    this.setState({
      checked: !this.state.checked 
    })
  }


render () {
    const {user} = this.props;
    const {sumCount,sumCountArr} = this.state;
    if(user[0].rola === -1){
      return <div>wejście nieuprawnione</div>
    }

   
    return (
      <div className="GetTypeGame">
          <GetTypeGameList 
              handleCheckChieldElement={this.handleCheckChieldElement}
              onSumaPytanArray={this.props.onSumaPytanArray}
              type={this.state.type} 
              checkTab={this.state.checkTab}
              addedTypes={this.state.addedTypes}
              addedType={this.props.addedType}
              onAceptType={this.onAceptType}
              sumCountArr={sumCountArr}
              sumCount={sumCount}
              checked={this.state.checked}
              onChangeClick={this.onChangeClick}
          />

      </div>
    );
  }
}
/*
GetTypeGame.propTypes = {
    user:PropTypes.array,
    type:PropTypes.array,
    dict:PropTypes.array,
    sumCount:PropTypes.number,
    sumCountArr:PropTypes.array,
    onSumaPytanArray:PropTypes.func
};

GetTypeGame.defaultProps = {
  // bla: 'test',
  sumCount:0,
  sumCountArr:[],
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
*/
export default GetTypeGame;
