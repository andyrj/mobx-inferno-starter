'use strict'
import { observable } from 'mobx'
import { Home, NoMatch } from './views'

export const store = observable({
  path: '/',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '*',
      component: NoMatch
    }
  ]
})
