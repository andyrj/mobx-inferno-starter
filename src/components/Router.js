'use strict'
import Inferno from 'inferno'
import { connect } from 'inferno-mobx'
import Link from './Link'

export default connect(['store'], ({ store, children }) => {
  return (
    <div id='route'>
      <p>{ store.path }</p>
      <Link path='/'>Home</Link>
      <br />
      <Link path='/test'>Test</Link>
      { store.routeChildren }
    </div>
  )
})
