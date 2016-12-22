'use strict'
import Inferno from 'inferno'
import { connect } from 'inferno-mobx'
import { Link } from '../components'

export default connect(['store'], ({ store }) => {
  return (
    <div>
      <h1>Error: 404</h1>
      <p>No Match Found for path: { store.path }</p>
    </div>
  )
})
