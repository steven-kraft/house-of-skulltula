import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import SkulltulaList from "./skulltula-list";
import SkulltulaToken from "./skulltula-token.jsx";
import skulltulas from './skulltula-data.js'
import AudioMute from './audio-mute'

class App extends React.Component {
  constructor(props){
    super(props);
    var tokens = 0;
    if (localStorage.getItem("skulltulas")) {
      var storage = JSON.parse(localStorage.getItem("skulltulas"));
      for(var i = 0; i < storage.length; ++i){if(storage[i] === true){tokens++;}}
    }
    this.state = {active_skulltulas: tokens, mute: false}
    this.handler = this.handler.bind(this);
    this.toggle_mute = this.toggle_mute.bind(this);
  }

  handler(status, id){
    var number = (status) ? 1 : -1
    var tokens = this.state.active_skulltulas + number;
    this.setState({active_skulltulas: tokens})
    var storage = JSON.parse(localStorage.getItem("skulltulas"));
    storage[id - 1] = status;
    localStorage.setItem("skulltulas", JSON.stringify(storage));
    return tokens;
  }

  toggle_mute(){
    this.setState({mute: !this.state.mute})
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

  clearSkulltulas(){
    if (confirm("Reset Skulltulas?")) {
      localStorage.removeItem("skulltulas");
      location.reload();
    }
  }

  render() {
    return (
      <div id="content">
        <AudioMute mute={this.state.mute} toggleMute={this.toggle_mute} />
        <h1>House of Skulltula</h1>
        <SkulltulaList active_skulltulas={this.state.active_skulltulas} clear_skulltulas={this.clearSkulltulas} >
          {skulltulas.map((skulltula) =>
            <SkulltulaToken key={skulltula.id} skulltula={skulltula} handler={this.handler} mute={this.state.mute} />
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
