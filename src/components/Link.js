'use strict'
import Inferno, { linkEvent } from 'inferno'
import { store } from '../store'

const changeRoute = (props, event) => {
  event.preventDefault()
  store.path = props.path
}

export default ({ path, children }) => {
  return (
  <a href={ path } onClick={ linkEvent({ path }, changeRoute) } >
    { children }
  </a>
  )
}
