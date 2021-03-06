import React from "react";
import ReactDOM from "react-dom";
import Tippy from "tippy.js";

import './skulltula-tooltip.css'

class SkulltulaTooltip extends React.Component {
  componentDidMount() {
    const node = ReactDOM.findDOMNode(this);

    function get_age(props){
      if (props.young && props.adult) {
        return <div className="icon age"><img src="./assets/images/young.png" alt="" /><img src="./assets/images/adult.png" alt="" /></div>
      } else if (props.young) {
        return <div className="icon age"><img src="./assets/images/young.png" alt="" /></div>
      } else if (props.adult) {
        return <div className="icon age"><img src="./assets/images/adult.png" alt="" /></div>
      }
      return <div className="icon age"></div>
    }

    function get_time(props){
      if (props.night) {
        return <div className="icon"><img src="./assets/images/night.png" alt="" /></div>
      } else {
        return <div className="icon"><img src="./assets/images/daynight.png" alt="" /></div>
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
            <div className="icons">{get_age(this.props)} {get_time(this.props)}</div>
            <img src={"./assets/images/skulltulas/skulltula-" + this.props.id + ".jpg"} className="tippy" alt=""/>
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
