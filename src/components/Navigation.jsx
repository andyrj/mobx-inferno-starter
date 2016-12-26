/* eslint-disable jsx-a11y/href-no-hash */
'use strict';
import Inferno from 'inferno';
import { connect } from 'inferno-mobx';

const NAV_C='mdc-temporary-drawer__content mdc-list';
const A_C='mdc-list-item mdc-temporary-drawer--selected';
const I_C='material-icons mdc-list-item__start-detail';

export default connect(['store'], ({ store }) => {
  <nav className="{NAV_C}" id="icon-with-text-demo">
    <a className="{A_C}" href="#">
      <i aria-hidden="true" className="{I_C}">
        {'Home'}
      </i> {'Home'}
    </a>
  </nav>;
});
