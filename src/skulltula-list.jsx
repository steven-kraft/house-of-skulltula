import React from 'react';
import SkulltulaToken from "./skulltula-token.jsx";
import SkulltulaTooltip from './skulltula-tooltip';

class SkulltulaList extends React.Component {

  skulltulas = [
    {id: 1, title: 'Skulltula 1', content: 'Descrption of Skulltula 1'},
    {id: 2, title: 'Skulltula 2', content: 'Descrption of Skulltula 2'},
    {id: 3, title: 'Skulltula 3', content: 'Descrption of Skulltula 3'},
    {id: 4, title: 'Skulltula 4', content: 'Descrption of Skulltula 4'},
    {id: 5, title: 'Skulltula 5', content: 'Descrption of Skulltula 5'}
  ]

  render() {
    console.log("list loaded")
    return (
      <div>
        <ul>
          {this.skulltulas.map((skulltula) =>
            <li key={skulltula.id}>
              <SkulltulaTooltip>
                <SkulltulaToken title={skulltula.title} />
              </SkulltulaTooltip>
            </li>
          )}
        </ul>
      </div>
    )
  }
}

export default SkulltulaList;
