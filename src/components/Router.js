'use strict'
import Inferno from 'inferno'
import { connect } from 'inferno-mobx'
import Menu, { mounted, unmounted } from './Menu'
import MenuAnchor from './MenuAnchor'

export default connect(['store'], ({ store, children }) => {
  return (
    <div id='route'>
      <MenuAnchor />
      <Menu onComponentDidMount={ mounted } onComponentWillUnmount={ unmounted } />
      <main>
        { store.routeChildren }
      </main>
    </div>
  )
})
