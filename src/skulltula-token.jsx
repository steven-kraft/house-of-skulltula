import React from 'react';
import './skulltula-token.css';

import SkulltulaTooltip from './skulltula-tooltip';

var activate_sound = new Audio('/assets/skulltula.wav');
var deactivate_sound = new Audio('/assets/deselect.wav');

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
      this.props.handler(1);
    }
    else {
      deactivate_sound.play();
      this.props.handler(-1);
    }
  }

  render() {
    let className = 'inactive'
    if (this.state.isToggleOn) {className = 'active'}
    return (
      <li key={this.props.skulltula.id}>
        <SkulltulaTooltip id={this.props.skulltula.id} title={this.props.skulltula.title} content={this.props.skulltula.content} location={this.props.skulltula.location} young={this.props.skulltula.young} adult={this.props.skulltula.adult} night={this.props.skulltula.night}>
          <img src="./assets/token.png" alt="" className={"token " + className} onClick={this.handleClick} />
        </SkulltulaTooltip>
      </li>
    )
  }
}

export default SkulltulaToken;
