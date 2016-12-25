'use strict'
import Inferno from 'inferno'
import { connect } from 'inferno-mobx'
import Menu, { mounted, unmounted } from './Menu'
import MenuAnchor from './MenuAnchor'

export default connect(['store'], ({ store }) => {
	return (
    <div id='route'>
        <MenuAnchor />
        <Menu />
        <main>
            { store.routeChildren }
        </main>
    </div>
  )
})
