'use strict'
import Inferno from 'inferno'
import { store } from './store'
import { reaction } from 'mobx'
import createHistory from 'history/createBrowserHistory'

let App = require('./views').App

// basic html5 history router
const history = createHistory()
// Listen for changes to the current location.
const unlisten = history.listen((location, action) => {
  store.path = location.pathname
})

// react to mobx path changes
const router = reaction(() => store.path, (path) => {
  if (history.location.pathname !== path) {
    history.push(path, {})
  }
})

Inferno.render(<App store={ store } />, document.getElementById('root'))

if (module.hot) {
  module.hot.accept('./views', (args) => {
    App = require('./views').App
    Inferno.render(<App store={ store } />, document.getElementById('root'))
  })
}
