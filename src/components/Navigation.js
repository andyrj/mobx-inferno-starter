'use strict'
import Inferno from 'inferno'

export default ({ store }) => {
  return (
    <nav id="icon-with-text-demo" class="mdc-temporary-drawer__content mdc-list">
      <a class="mdc-list-item mdc-temporary-drawer--selected" href="#">
        <i class="material-icons mdc-list-item__start-detail" aria-hidden="true">Home</i>Home
      </a>
    </nav>
  )
}
