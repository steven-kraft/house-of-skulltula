import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import SkulltulaList from "./skulltula-list";

class App extends React.Component {
  render() {
    return (
      <div>
        <SkulltulaList />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
