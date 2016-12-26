'use strict';
import HttpHash from 'http-hash';
import createElement from 'inferno-create-element';
import { observable } from 'mobx';
import { foreach, assign, filter } from 'lodash';
import { Home, Counters, NoMatch } from './views';

const store = observable({
  path: '/',
  displayMenu: false,
  routes: [
    {
      path: '/',
      text: 'Home',
      icon: 'home',
      component: Home
    },
    {
      path: '/counters',
      text: 'Counters',
      icon: 'account_balance_wallet',
      component: Counters
    },
    {
      path: '*',
      text: '404',
      icon: 'error_outline',
      component: NoMatch
    }
  ],
  navLinkFilter: [
    '/',
    '/counters'
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
  },
  get navLinks() {
    return filter(this.routes, (route) => {
      return this.navLinkFilter.indexOf(route.path) > -1;
    });
  }
});

export default store;