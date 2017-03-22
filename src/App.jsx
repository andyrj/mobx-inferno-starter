'use strict';
import Inferno from 'inferno';
import { Provider } from 'inferno-mobx';
import { Router, Link } from './components';

/*
import '../node_modules/material-icons/css/material-icons.min.css';
import './style/base.scss';
*/

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
