import React from 'react';
import './skulltula-token.css';

var activate_sound = new Audio('/assets/skulltula.wav');
var deactivate_sound = new Audio('/assets/deselect.wav');
console.log("test")

class SkulltulaToken extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: false};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
    if (!this.state.isToggleOn) {
      activate_sound.play();
    }
    else {
      deactivate_sound.play();
    }
  }

  render() {
    let className = 'token';
    if (!this.state.isToggleOn) {
      className += ' inactive'
    }
    return (
      <img src="./assets/token.png" alt="" className={className} onClick={this.handleClick} />
    )
  }
}

export default SkulltulaToken;
