import React from 'react';
import './skulltula-list.css';

import SkulltulaToken from "./skulltula-token.jsx";
import skulltulas from './skulltula-data.js'
import './skulltula-counter.jsx'


class SkulltulaList extends React.Component {
  render() {
    return (
        <ul id="skulltula-list">
          {skulltulas.map((skulltula) =>
            <SkulltulaToken key={skulltula.id} skulltula={skulltula} />
          )}
        </ul>
    )
  }
}

export default SkulltulaList;
