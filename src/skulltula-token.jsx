import React from 'react';
import './skulltula-token.css';

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
    console.log(this.props.title)
  }

  render() {
    let className = 'token';
    if (!this.state.isToggleOn) {
      className += ' inactive'
    }
    return (
      <img src="./assets/token.png" alt="test" className={className} onClick={this.handleClick} />
    )
  }
}

export default SkulltulaToken;
