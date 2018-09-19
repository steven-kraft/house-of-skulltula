import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import SkulltulaList from "./skulltula-list";
import SkulltulaToken from "./skulltula-token.jsx";
import skulltulas from './skulltula-data.js'

class App extends React.Component {
  constructor(props){
    super(props);
    var tokens = 0;
    if (localStorage.getItem("skulltulas")) {
      var storage = JSON.parse(localStorage.getItem("skulltulas"));
      for(var i = 0; i < storage.length; ++i){if(storage[i] === true){tokens++;}}
    }
    this.state = {active_skulltulas: tokens}
    this.handler = this.handler.bind(this);
  }

  handler(status, id){
    var number = (status) ? 1 : -1
    this.setState({
      active_skulltulas: this.state.active_skulltulas + number
    })
    var storage = JSON.parse(localStorage.getItem("skulltulas"));
    storage[id - 1] = status;
    localStorage.setItem("skulltulas", JSON.stringify(storage));
  }

  setupStorage(){
    if (localStorage.getItem("skulltulas") === null) {
      var storage = [];
      for (var i = 0; i < 100; i++) {
          storage[i] = false;
      }
      localStorage.setItem("skulltulas", JSON.stringify(storage));
    }
  }
  render() {
    return (
      <div id="content">
        <h1>House of Skulltula</h1>
        <SkulltulaList active_skulltulas={this.state.active_skulltulas}>
          {skulltulas.map((skulltula) =>
            <SkulltulaToken key={skulltula.id} skulltula={skulltula} handler={this.handler} />
          )}
        </SkulltulaList>
        {this.setupStorage()}
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
