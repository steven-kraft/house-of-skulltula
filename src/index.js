import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import SkulltulaList from "./skulltula-list";
import SkulltulaToken from "./skulltula-token.jsx";
import skulltulas from './skulltula-data.js'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {active_skulltulas: 0}
    this.handler = this.handler.bind(this);
  }

  handler(number){
    this.setState({
      active_skulltulas: this.state.active_skulltulas + number
    })
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
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
