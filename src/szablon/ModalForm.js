import React, { PureComponent } from 'react';
import AriaModal from 'react-aria-modal';




class ModalForm extends PureComponent { 
    
    state={
        modalActive: false
    }

    activateModal = () => {
        this.setState({ modalActive: true,message:'' });
      };
    
      deactivateModal = () => {
        this.setState({ modalActive: false });
      };
    
      
      getApplicationNode = () => {
        return document.getElementById('application');
      };
    
    componentDidMount = () => {
        this.setState({ modalActive: this.props.modalActive });
    }

    componentWillUnmount() {
        this.props.handleClick();
    }

    render () {
    const {title,message } = this.props;
    const {modalActive} = this.state;
    const modal = modalActive
      ? 
      <AriaModal
          titleText={title}
          initialFocus="#demo-one-deactivate"
          getApplicationNode={this.getApplicationNode}
          underlayStyle={{ paddingTop: '2em' }}
          alert={true}
          focusDialog={true}
          titleId='modal-title'
          underlayClickExits={false}
          verticallyCenter={true}
        >
          <div id="demo-one-modal" className="modal modal-body">
              <div className="modal__title" >{title}</div>
              
              <div className="modal__message" >{message}</div>
            
            <button className="modal__exit" onClick={this.deactivateModal} >Exit</button>
          </div>
        </AriaModal>
        
      : 
      null
      ;

    return (
      <>
        {modal}
      </>
    );
  }
}


export default ModalForm;
