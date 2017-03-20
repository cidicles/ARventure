import React from 'react';
import {render} from 'react-dom';
import 'babel-polyfill';

import Boiler from './components/boiler.jsx';

class App extends React.Component {
  render () {
    return <Boiler />;
  }
}

render(<App/>, document.getElementById('app'));
