'use strict'
import Inferno from 'inferno'
import { store } from '../store'

const changeRoute = (event) => {
  event.preventDefault()
  store.path = event.target.href
}

export default ({ text, path }) => {
  /* not working either...
  const test = (event) => {
    event.preventDefault()
    console.log('default prevented?')
  }*/
  return (
  <a href={ path } onClick={ changeRoute } >
    { text }
  </a>
  )
}
