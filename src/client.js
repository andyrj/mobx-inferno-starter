'use strict'
import Inferno from 'inferno'
import { store } from './store'
import { reaction } from 'mobx'
import createHistory from 'history/createBrowserHistory'
import App from './App'

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
