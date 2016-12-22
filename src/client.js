'use strict'
import Inferno from 'inferno'
import HttpHash from 'http-hash'
import { store } from './store'
import { reaction, autorun } from 'mobx'
import createHistory from 'history/createBrowserHistory'
import App from './App'
import { assign, foreach } from 'lodash'

// basic html5 history router
const history = createHistory()
// Listen for changes to the current location.
const unlisten = history.listen((location, action) => {
  if (store.path !== location.pathname) {
    store.path = location.pathname
  }
})

// react to mobx path changes
const routing = reaction(() => store.path, (path) => {
  if (history.location.pathname !== path) {
    history.push(path, {})
  }
})

// setup http-hash router
let routes
const disposer = reaction(() => store.routes, () => {
  // when routes update, destroy httphash router and regenerate it
  routes = HttpHash()
  foreach(store.routes, (route) => {
    routes.set(route.path, route.component)
  })
}, true)

let routeChildren
const runRouting = autorun(() => {
  const route = routes.get(store.path)
  if (route.handler) {
    routeChildren = route.handler(assign({}, route.params, { splat: route.splat }))
  } else {
    routeChildren = (
      <div>
        Routing Error!
      </div>
    )
  }
})

Inferno.render(<App store={ store } routeChildren={ routeChildren } />, document.getElementById('root'))

if (module.hot) {
  module.hot.accept('./App', () => {
    Inferno.render(<App store={ store } routeChildren={ routeChildren } />, document.getElementById('root'))
  })
}
