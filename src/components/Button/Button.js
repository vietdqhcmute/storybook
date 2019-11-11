import React, { Component } from 'react';

class Button extends Component {
  var buttonStyle = {
    margin:'10px 10px 10px 0'
  }
  render() {
    return (
      <button 
        className="btn btn-default"
        style = {buttonStyle}
        onClick = {this.props.handleClick}
      >{this.props.label}</button>
     );
  }
}

export default Button;
