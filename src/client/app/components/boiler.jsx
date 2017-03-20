import 'aframe';
import {Entity, Scene} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';

class Boiler extends React.Component {
  render () {
    return (
      <div>
        <Scene>
          <Entity geometry={{primitive: 'box'}} material="color: blue" position={[0, 0, -5]} />
        </Scene>
      </div>
    );
  }
}

export default Boiler;
