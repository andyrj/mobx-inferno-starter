'use strict';
import Router from './Router';
import Counters from './Counters';
import Todos from './Todos';

class Stores {
  counters = new Counters();
  router = new Router();
  todos = new Todos();
}

const stores = new Stores();
export default stores;