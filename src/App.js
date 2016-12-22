'use strict'
import Inferno from 'inferno'
import { Provider } from 'inferno-mobx'
import { Router, Link } from './components'

export default ({ store, routeChildren }) => {
  return (
    <Provider store={ store } >
      <div>
        <p>{ store.path }</p>
        <Link path="/">Home</Link>
        <br />
        <Link path="/test">Fail!</Link>
        <Router>{ routeChildren }</Router>
      </div>
    </Provider>
  )
}
