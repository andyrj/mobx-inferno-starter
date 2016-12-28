'use strict';
import Inferno from 'inferno';
import { connect } from 'inferno-mobx';
import RouterLink from './RouterLink';

const NAV_C = ['mdc-temporary-drawer__content', 'mdc-list'];
const A_C = ['mdc-list-item', 'mdc-temporary-drawer--selected'];
const I_C = ['material-icons', 'mdc-list-item__start-detail'];

export default connect(['store'], function Navigation({ store }) {
  let links = store.navLinks.map((link) => {
    return (
      <RouterLink path={link.path}>
        {link.text}
      </RouterLink>);
  });

  return (
    <nav className={NAV_C.join(' ')} id="drawer_nav">
      {links}
    </nav>
  );
});
