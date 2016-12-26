'use strict';
import Inferno from 'inferno';
import createHistory from 'history/createBrowserHistory';
import { reaction } from 'mobx';
import App from './App';
import storage from './store';


let store;
if (process.env.NODE_ENV !== 'production') {
  let remotedev = require('mobx-remotedev');
  require('inferno-devtools');
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
