import React, { PureComponent } from 'react';

class Toolbar extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }


  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="ToolbarWrapper">
        Test content
        
      </div>
    );
  }
}


export default Toolbar;
