import React, { PureComponent } from 'react';
import AriaModal from 'react-aria-modal';
import FormUser from '../FormUser/FormUser';



class LoginModalForm extends PureComponent { 

    

    render () {
    const {
        deactivateModal,
        getApplicationNode,
        modalActive,
      } = this.props

    const modal = modalActive
      ? 
      <AriaModal
          titleText="logowanie do gry"
          onExit={deactivateModal}
          initialFocus="#demo-one-deactivate"
          getApplicationNode={getApplicationNode}
          underlayStyle={{ paddingTop: '2em' }}
          alert={true}
          focusDialog={true}
          titleId='modal-title'
          underlayClickExits={false}
          verticallyCenter={true}
        >
          <div id="demo-one-modal" className="modal modal-body">
            <FormUser {...this.props} 
            />
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


export default LoginModalForm;
