'use strict';
import Inferno from 'inferno';
import createHistory from 'history/createBrowserHistory';
import { action, reaction, useStrict } from 'mobx';
import App from './App';
import stores from './stores';

const DEV = process.env.NODE_ENV !== 'production';

// setup devtools for components/stores
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
  Object.keys(stores).forEach((key) => {
    stores[key] = remotedev(stores[key]);
  });
}

// setup html5 history routing
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

// define rendering entry-point
const renderApp = () => {
  Inferno.render(
    <App stores={stores} />, 
      document.getElementById('root')
  );
};
renderApp();

// hot module reloading
if (module.hot) {
  module.hot.accept('./App', () => {
    renderApp();
  });

  module.hot.accept();
}
