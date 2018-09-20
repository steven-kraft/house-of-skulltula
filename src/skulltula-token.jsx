import React from 'react';
import './skulltula-token.css';

import SkulltulaTooltip from './skulltula-tooltip';

var activate_sound = new Audio('./assets/skulltula.wav');
var deactivate_sound = new Audio('./assets/deselect.wav');
var complete_sound = new Audio('./assets/complete.wav')

class SkulltulaToken extends React.Component {
  constructor(props) {
    super(props);
    if (localStorage.getItem("skulltulas") === null) {
      this.state = {isToggleOn: false};
    } else {
      this.state = {
        isToggleOn: JSON.parse(localStorage.getItem("skulltulas"))[this.props.skulltula.id - 1]
      };
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
    var number = this.props.handler(!this.state.isToggleOn, this.props.skulltula.id);
    if (!this.state.isToggleOn && number === 100) {
      complete_sound.play();
    } else if (!this.state.isToggleOn) {
      activate_sound.play();
    } else {
      deactivate_sound.play();
    }
  }

  render() {
    let className = 'inactive'
    if (this.state.isToggleOn) {className = 'active'}
    return (
      <li key={this.props.skulltula.id}>
        <SkulltulaTooltip id={this.props.skulltula.id} title={this.props.skulltula.title} content={this.props.skulltula.content} location={this.props.skulltula.location} young={this.props.skulltula.young} adult={this.props.skulltula.adult} night={this.props.skulltula.night}>
          <img src="./assets/images/token.png" alt="" className={"token " + className} onClick={this.handleClick} />
        </SkulltulaTooltip>
      </li>
    )
  }
}

export default SkulltulaToken;
