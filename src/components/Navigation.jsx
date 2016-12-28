'use strict';
import Inferno from 'inferno';
import { connect } from 'inferno-mobx';
import { closeMenu } from './Menu';
import RouterLink from './RouterLink';

const NAV_C = ['mdc-temporary-drawer__content', 'mdc-list'];
const A_C = ['mdc-list-item', 'mdc-temporary-drawer--selected'];
const I_C = ['material-icons', 'mdc-list-item__start-detail'];

const handleMenuLinkClick = ({routerStore, path, event}) => {
  routerStore.changeRoute(path, event);
  closeMenu();
};

export default connect(['routerStore'], function Navigation({ routerStore }) {
  let links = routerStore.navLinks.map((link) => {
    return (
      <RouterLink 
        classes={A_C.join(' ')} 
        clickHandler={({path, event}) => handleMenuLinkClick({routerStore, path, event})}
        key={link.path} 
        path={link.path}
      >
        <i className={link.icon}></i>
        {link.text}
      </RouterLink>);
  });

  return (
    <nav className={NAV_C.join(' ')} id="drawer_nav">
      {links}
    </nav>
  );
});
