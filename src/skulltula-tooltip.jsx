import React from "react";
import ReactDOM from "react-dom";
import Tippy from "tippy.js";

import './skulltula-tooltip.css'

class SkulltulaTooltip extends React.Component {
  componentDidMount() {
    const node = ReactDOM.findDOMNode(this);

    Tippy(node, {
      size: 'small',
      maxWidth: '400px',
      html: () => {
        const el = document.createElement('div')
        ReactDOM.render(
          <div>
            <h2>Skulltula #01</h2>
            <img src="./assets/temp.jpg" class="tippy" alt=""/>
            <p>After finishing the first dungeon, return to Kokiri Forest at night and find the spider on the back of the Know it all Brothers’ house.</p>
          </div> ,el );
        return el
      }
    });
    this.tippyInstance = node._tippy;

  }

  componentWillUnmount() {
    if (this.tippyInstance) {
      this.tippyInstance.destroy();
    }
  }

  // returning only the children so we dont have unnecessary div in DOM
  // tippy will find the child with the title attribute and give it a tooltip.
  render() {
    return this.props.children;
  }
}

export default SkulltulaTooltip;