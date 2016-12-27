'use strict';
import Inferno from 'inferno';
import createHistory from 'history/createBrowserHistory';
import { reaction, useStrict } from 'mobx';
import App from './App';
import storage from './store';

const DEV = process.env.NODE_ENV !== 'production';

let store;
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
  store = remotedev(storage);
} else {
  store = storage;
}

const history = createHistory();

const unlisten = history.listen((location, action) => {
  if (store.path !== location.pathname) {
    store.path = location.pathname;
  }
});

const routing = reaction(() => store.path, (path) => {
  if (history.location.pathname !== path) {
    history.push(path, {});
  }
});

const renderApp = () => {
  Inferno.render(<App store={store} />, document.getElementById('root'));
};
renderApp();

if (module.hot) {
  module.hot.accept('./App', () => {
    renderApp();
  });

  module.hot.accept();
}
