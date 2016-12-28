'use strict';
import HttpHash from 'http-hash';
import createElement from 'inferno-create-element';
import { observable, computed, action } from 'mobx';
import { foreach, assign, filter } from 'lodash';
import shortid from 'shortid';
import { Home, Counters, NoMatch } from './views';

class Store {
  @observable path = '/';
  @observable counters = [];

  @action increment(cid) {
    this.counters.filter((counter) => {
      return counter.id === cid;
    })[0].count += 1;
  }

  @action decrement(cid) {
    this.counters.filter((counter) => {
      return counter.id === cid;
    })[0].count -= 1;
  }
  
  @action deleteCounter(cid) {
    this.counters.remove(this.counters.filter((counter) => {
      return counter.id === cid;
    })[0]);
  }

  @action addCounter() {
    this.counters.push({id:shortid.generate(), count: 0});
  }

  @observable routes = [
    {
      path: '/',
      text: 'Home',
      icon: 'mi mi-home',
      component: Home
    },
    {
      path: '/counters',
      text: 'Counters',
      icon: 'mi mi-account-balance-wallet',
      component: Counters
    },
    {
      path: '*',
      text: '404',
      icon: 'error_outline',
      component: NoMatch
    }
  ]

  @observable navLinkFilter = [
    '/',
    '/counters'
  ]

  @computed get router() {
    let _router = HttpHash();
    foreach(store.routes, (route) => {
      _router.set(route.path, route.component);
    });
    return _router;
  }

  @computed get routeChildren() {
    let route = this.router.get(this.path);
    let props = assign({}, route.params, { splat: route.splat });
    return createElement(route.handler, props);
  }

  @computed get navLinks() {
    return filter(this.routes, (route) => {
      return this.navLinkFilter.indexOf(route.path) > -1;
    });
  }
}

const store = new Store();
export default store;