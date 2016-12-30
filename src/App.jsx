'use strict';
import Inferno from 'inferno';
import { Provider } from 'inferno-mobx';
import { Router, Link } from './components';

require('../node_modules/material-icons/css/material-icons.min.css');
require(
  '../node_modules/material-components-web/dist/material-components-web.css'
);

export default function App({ counters, router }) {
  return (
    <Provider counters={counters} routerStore={router}>
      <Router />
    </Provider>
  );
}
