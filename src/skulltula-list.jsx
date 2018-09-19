import React from 'react';
import './skulltula-list.css';

import './skulltula-counter.jsx'

class SkulltulaList extends React.Component {
  render() {
    return (
      <div>
        <ul id="skulltula-list">
          {this.props.children}
        </ul>
        <div id="counter">
            <img src="./assets/images/counter_icon.png" alt="" />
            <div className="counter">{this.props.active_skulltulas} / 100</div>
        </div>
      </div>
    )
  }
}

export default SkulltulaList;
