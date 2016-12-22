'use strict'
import { store } from '../store'
import { Link } from '../components'
import HttpHash from 'http-hash'

// setup http-hash router
let hash = HttpHash()

const setupRoutes = (routes) => {
  Object.keys(routes).forEach((key) => {
    hash.set(key, routes[key][1])
  })
}

export default () => {}
