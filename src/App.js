'use strict'
import Inferno from 'inferno'
import { Provider } from 'inferno-mobx'
import { Router, Link } from './components'

export default ({ store }) => {
  return (
    <Provider store={ store } >
      <Router />
    </Provider>
  )
}
