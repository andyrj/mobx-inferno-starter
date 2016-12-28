'use strict';
import Inferno from 'inferno';
import { Provider } from 'inferno-mobx';
import { Router, Link } from './components';

require('../node_modules/material-icons/css/material-icons.min.css');
require(
  '../node_modules/material-components-web/dist/material-components-web.css'
);

export default function App({ routerStore, counterStore }) {
  return (
    <Provider routerStore={routerStore} counterStore={counterStore} >
      <Router />
    </Provider>
  );
}
