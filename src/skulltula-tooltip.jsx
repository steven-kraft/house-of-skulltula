import React from "react";
import ReactDOM from "react-dom";
import Tippy from "tippy.js";

import './skulltula-tooltip.css'

class SkulltulaTooltip extends React.Component {
  componentDidMount() {
    const node = ReactDOM.findDOMNode(this);

    function get_age(props){
      if (props.young && props.adult) {
        return <div class="icon age"><img src="./assets/young.png" alt="" /><img src="./assets/adult.png" alt="" /></div>
      } else if (props.young) {
        return <div class="icon age"><img src="./assets/young.png" alt="" /></div>
      } else if (props.adult) {
        return <div class="icon age"><img src="./assets/adult.png" alt="" /></div>
      }
      return <div class="icon age"></div>
    }

    function get_time(props){
      if (props.night) {
        return <div class="icon"><img src="./assets/night.png" alt="" /></div>
      } else {
        return <div class="icon"><img src="./assets/daynight.png" alt="" /></div>
      }
    }

    Tippy(node, {
      size: 'small',
      maxWidth: '400px',
      html: () => {
        const el = document.createElement('div')
        ReactDOM.render(
          <div>
            <h2>Skulltula #{this.props.id} - {this.props.title}</h2>
            <div class="icons">{get_age(this.props)} {get_time(this.props)}</div>
            <img src={"./assets/skulltulas/skulltula-" + this.props.id + ".jpg"} className="tippy" alt=""/>
            <p><b>Location:</b> {this.props.location}</p>
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
