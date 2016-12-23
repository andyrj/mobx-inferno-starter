'use strict'
import Inferno from 'inferno'
import { store as baseStore } from './store'
import { reaction } from 'mobx'
import createHistory from 'history/createBrowserHistory'
import App from './App'

let store
if (process.env.NODE_ENV !== 'production') {
  let remotedev = require('mobx-remotedev').default
  require('inferno-devtools')
  store = remotedev(baseStore)
} else {
  store = baseStore
}

const history = createHistory()

const unlisten = history.listen((location, action) => {
  if (store.path !== location.pathname) {
    store.path = location.pathname
  }
})

const routing = reaction(() => store.path, (path) => {
  if (history.location.pathname !== path) {
    history.push(path, {})
  }
})

Inferno.render(<App store={ store } />, document.getElementById('root'))

if (module.hot) {
  module.hot.accept('./App', () => {
    Inferno.render(<App store={ store } />, document.getElementById('root'))
  })
}
