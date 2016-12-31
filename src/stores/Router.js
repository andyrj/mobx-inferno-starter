'use strict';
import HttpHash from 'http-hash';
import createElement from 'inferno-create-element';
import { observable, computed, action, asMap } from 'mobx';
import * as views from '../views';

class Router {
  @observable path = '/';
  menu = undefined;
  @observable routes = [
    {
      path: '/',
      text: 'Home',
      icon: 'mi mi-home',
      component: views.Home
    },
    {
      path: '/counters',
      text: 'Counters',
      icon: 'mi mi-account-balance-wallet',
      component: views.Counters
    },
    {
      path: '/todos',
      text: 'Todos',
      icon: 'mi mi-list',
      component: views.Todos
    },
    {
      path: '*',
      text: '404',
      icon: 'error_outline',
      component: views.NoMatch
    }
  ]

  @observable navLinkFilter = [
    '/',
    '/counters',
    '/todos'
  ]

  @computed get router() {
    let _router = HttpHash();
    this.routes.forEach((route) => {
      _router.set(route.path, route.component);
    });
    return _router;
  }

  @computed get routeChildren() {
    let route = this.router.get(this.path);
    let props = Object.assign({}, route.params, { splat: route.splat });
    return createElement(route.handler, props);
  }

  @computed get navLinks() {
    return this.routes.filter((route) => {
      return this.navLinkFilter.indexOf(route.path) > -1;
    });
  }

  @action changeRoute(path, event) {
    event.preventDefault();
    this.path = path;
  }
}

export default Object.freeze(Router);
