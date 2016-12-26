'use strict';
import Inferno from 'inferno';
import { connect } from 'inferno-mobx';
import Link from './Link';

const NAV_C = ['mdc-temporary-drawer__content', 'mdc-list'];
const A_C = ['mdc-list-item', 'mdc-temporary-drawer--selected'];
const I_C = ['material-icons', 'mdc-list-item__start-detail'];

export default connect(['store'], function Navigation({ store }) {
  let links = store.navLinks.map((link) => {
    return (
      <Link classes={A_C.join(' ')} key={link.path} path={link.path}>
        <i aria-hidden="true" className={I_C.join(' ')}>
          {link.icon}
        </i> {link.text}
      </Link>);
  });

  return (
    <nav className={NAV_C.join(' ')} id="drawer_nav">
      {links}
    </nav>
  );
});
