/* eslint-disable import/first */

import React, { Component } from 'react';
import '../../node_modules/@fortawesome/fontawesome-free/css/all.min.css'

var CSSTransitionGroup = require('react-transition-group/CSSTransitionGroup');

import './Zaloguj.scss';


const ReactCSSTG = CSSTransitionGroup;

// Main app
class Zaloguj extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isVisible: true
      }
      // Bindings
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRemount = this.handleRemount.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      isVisible: false
    }, function() {

    });
    return false;
  }
  handleRemount(e) {
    this.setState({
      isVisible: true
    }, function() {

    });
    e.preventDefault();
  }
  render() {

    // const for React CSS transition declaration
    let component = this.state.isVisible ? <Modal onSubmit={ this.handleSubmit } key='modal'/> : <ModalBack onClick={ this.handleRemount } key='bringitback'/>;

    return <ReactCSSTG transitionName="animation" 
            transitionAppear={true} 
            transitionAppearTimeout={500} 
            transitionEnterTimeout={500} 
            transitionLeaveTimeout={300}>

             { component }
           </ReactCSSTG>
  }
}

// Modal
class Modal extends React.Component {
  render() {
    return (<div className='Modal'>
              <Logo />
              <form onSubmit= { this.props.onSubmit }>
                <Input 
                    type='text' 
                    name='username' 
                    placeholder='username' 
                />
                <Input 
                    type='password' 
                    name='password' 
                    placeholder='password' 
                />

                <button className='Modal--button'> Sign In</button>

              </form>
              <div className='social-signin'>
                <button 
                    className="fb" 
                    onClick={ this.props.onClick }>
                  <i className="fab fa-facebook-square"></i>
                </button>

                <button 
                    className="tw" 
                    onClick={ this.props.onClick }>
                  <i className="fab fa-twitter-square"></i>
                </button>
                
              </div>
                <a href='/'>Lost your password ?</a>
           </div>)
  }
}

// Generic input field
class Input extends React.Component {
  render() {
    return (<div className='Input'>
              <input 
              type={ this.props.type } 
              name={ this.props.name } 
              placeholder={ this.props.placeholder } 
              required autocomplete='false'/>
              <label for={ this.props.name } ></label>
           </div>)
  }

}

// Fake logo
class Logo extends React.Component {
  render() {
    return <div className="logo">
                <i className="fa fa-bug" aria-hidden="true"></i> 
                <span> awesome logo </span>
              </div>
  }
}

// Button to brind the modal back
class ModalBack extends React.Component {
  render() {
    return <button className="bringitback" 
                  onClick={ this.props.onClick } 
                  key={ this.props.className }>
                  Brind the modal back !
            </button>
  }
}


export default Zaloguj;
