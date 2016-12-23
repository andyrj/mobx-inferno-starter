import Inferno from 'inferno'
import { connect } from 'inferno-mobx'
import Navigation from './Navigation'
import {MDCTemporaryDrawer, MDCTemporaryDrawerFoundation} from '@material/drawer'

// pull in drawer css
require('../../node_modules/@material/drawer/dist/mdc.drawer.css')

// Note: designing this as a singleton'ish really shouldn't put more than one in a view/component
// lifecycle hook functions for initializing and cleaning up after menu
let menu
export const mounted = (domNode) => {
  menu = new MDCTemporaryDrawer(domNode)
}

export const unmounted = () => {
  menu.destroy()
}

export default connect(['store'], ({ store }) => {
  (
    <aside class="mdc-temporary-drawer mdc-typography">
      <nav class="mdc-temporary-drawer__drawer">
        <header class="mdc-temporary-drawer__header">
          <div class="mdc-temporary-drawer__header-content">
            Inferno-Mobx-Starter
          </div>
        </header>
        <navigation />
      </nav>
    </aside>
  )
})
