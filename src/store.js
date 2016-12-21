'use strict'
import { observable } from 'mobx'

const store = observable({
  path: '/'
})

module.exports = {
  store
}
