'use strict';
import Inferno from 'inferno';
import createHistory from 'history/createBrowserHistory';
import { action, reaction, useStrict } from 'mobx';
import App from './App';
import { counterStore, routerStore } from './store';

const DEV = process.env.NODE_ENV !== 'production';

let stores = {};
if (DEV) {
  let remotedev = require('mobx-remotedev');
  let enableLogging = require('mobx-logger').enableLogging;
  require('inferno-devtools');
  useStrict(true);
  enableLogging({predicate: () => true,
    action: true,
    reaction: true,
    transaction: true,
    compute: true
  });
  stores['router'] = remotedev(routerStore);
  stores['counters'] = remotedev(counterStore);
} else {
  store['router'] = routerStore;
  store['counters'] = counterStore;
}

const history = createHistory();

const pathUpdate = action('updatePath', (routerStore) => {
  routerStore.path = location.pathname;
})

const unlisten = history.listen((location, hAction) => {
  if (routerStore.path !== location.pathname) {
    pathUpdate(routerStore);
  }
});

const routing = reaction(() => routerStore.path, (path) => {
  if (history.location.pathname !== path) {
    history.push(path, {});
  }
});

const renderApp = () => {
  Inferno.render(
    <App 
      counterStore={stores['counters']} 
      routerStore={stores['router']} 
    />, 
      document.getElementById('root')
  );
};
renderApp();

if (module.hot) {
  module.hot.accept('./App', () => {
    renderApp();
  });

  module.hot.accept();
}
