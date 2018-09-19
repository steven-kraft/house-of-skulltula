import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import SkulltulaList from "./skulltula-list";
import SkulltulaCounter from "./skulltula-counter";

class App extends React.Component {
  render() {
    return (
      <div id="content">
        <h1>House of Skulltula</h1>
        <SkulltulaList />
        <SkulltulaCounter />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
