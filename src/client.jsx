'use strict';
import Inferno from 'inferno';
import createHistory from 'history/createBrowserHistory';
import { action, reaction, useStrict } from 'mobx';
import App from './App';
import * as _stores from './stores';

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
  // wrap each store with remotedev for redux-devtools to work
  Object.keys(_stores).forEach((key) => {
    stores[key] = remotedev(_stores[key]);
  });
} else {
  // in prod we don't want to wrap just pass through
  stores = _stores;
}

const history = createHistory();

const unlisten = history.listen((location, hAction) => {
  if (stores.router.path !== location.pathname) {
    action('updatePath', (router, location) => {
      router.path = location.pathname;
    })(stores.router, location);
  }
});

const routing = reaction(() => stores.router.path, (path) => {
  if (history.location.pathname !== path) {
    history.push(path, {});
  }
});

const renderApp = () => {
  Inferno.render(
    <App 
      counters={stores.counters} 
      router={stores.router} 
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
