'use strict'
import Inferno from 'inferno'
import { connect } from 'inferno-mobx'

export default connect(['store'], ({ store }) => {
  return (
      <nav className="mdc-temporary-drawer__content mdc-list" 
          id="icon-with-text-demo"
      >
          <a className="mdc-list-item mdc-temporary-drawer--selected" 
              href="#"
          >
              <i aria-hidden="true" 
                  className="material-icons mdc-list-item__start-detail"
              >
                  { 'Home' }
              </i> { 'Home' }
          </a>
      </nav>
  )
})
