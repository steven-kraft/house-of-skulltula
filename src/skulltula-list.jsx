import React from 'react';
import SkulltulaToken from "./skulltula-token.jsx";
import SkulltulaTooltip from './skulltula-tooltip';
import skulltulas from './skulltula-data.js'
import './skulltula-list.css';

class SkulltulaList extends React.Component {

  render() {
    console.log("list loaded")
    return (
      <div>
        <ul id="skulltula-list">
          {skulltulas.map((skulltula) =>
            <li key={skulltula.id}>
              <SkulltulaTooltip id={skulltula.id} title={skulltula.title} content={skulltula.content}>
                <SkulltulaToken id={skulltula.id} />
              </SkulltulaTooltip>
            </li>
          )}
        </ul>
      </div>
    )
  }
}

export default SkulltulaList;
