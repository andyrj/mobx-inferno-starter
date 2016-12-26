'use strict';
import HttpHash from 'http-hash';
import createElement from 'inferno-create-element';
import { observable } from 'mobx';
import { foreach, assign } from 'lodash';
import { Home, NoMatch } from './views';

const store = observable({
  path: '/',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '*',
      component: NoMatch
    }
  ],
  get router() {
    let _router = HttpHash();
    foreach(store.routes, (route) => {
      _router.set(route.path, route.component);
    });
    return _router;
  },
  get routeChildren() {
    let route = this.router.get(this.path);
    let props = assign({}, route.params, { splat: route.splat });
    return createElement(route.handler, props);
  }
});

export default store;