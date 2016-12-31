'use strict';
import Inferno from 'inferno';
import { Provider } from 'inferno-mobx';
import { Router, Link } from './components';

require('../node_modules/material-icons/css/material-icons.min.css');
require(
  '../node_modules/material-components-web/dist/material-components-web.css'
);

export default function App({ stores }) {
  return (
    <Provider 
      counters={stores.counters} 
      router={stores.router}
      todos={stores.todos}
    >
      <Router />
    </Provider>
  );
}
