'use strict'
import Inferno from 'inferno'
import { connect } from 'inferno-mobx'

export default connect(['store'], ({ store, children }) => {
  return (
    <div id='route'>
      { children }
    </div>
  )
})
