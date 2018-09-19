import React from 'react';
import './skulltula-counter.css';

class SkulltulaCounter extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      active_skulltulas: 0
    }
  }

  render() {
    return (
      <div>
        <img src="./assets/counter_icon.png" alt="" />
        <div className="counter">{this.state.active_skulltulas} / 100</div>
      </div>
    )
  }
}

export default SkulltulaCounter;
