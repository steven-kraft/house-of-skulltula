import React from 'react';
import './skulltula-list.css';

class SkulltulaList extends React.Component {
  render() {
    var counter_class = "counter"
    if (this.props.active_skulltulas === 100) {counter_class += " gold"}
    return (
      <div>
        <ul id="skulltula-list">
          {this.props.children}
        </ul>
        <div id="counter">
            <img src="./assets/images/counter_icon.png" alt="" />
            <div className={counter_class}>{this.props.active_skulltulas} / 100</div>
        </div>
      </div>
    )
  }
}

export default SkulltulaList;
