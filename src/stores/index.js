'use strict';
import Router from './Router';
import Counters from './Counters';
import Todos from './Todos';

const counters = new Counters();
const router = new Router();
const todos = new Todos();

module.exports = {
  counters,
  router,
  todos
};