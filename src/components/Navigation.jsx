'use strict';
import Inferno from 'inferno';
import { connect } from 'inferno-mobx';
import RouterLink from './RouterLink';

const NAV_C = ['mdc-temporary-drawer__content', 'mdc-list'];
const A_C = ['mdc-list-item', 'mdc-temporary-drawer--selected'];
const I_C = ['material-icons', 'mdc-list-item__start-detail'];

const handleMenuLinkClick = ({router, path, event}) => {
  router.changeRoute(path, event);
  router.menu.open = false;
};

export default connect(['router'], function Navigation({ router }) {
  let links = router.navLinks.map((link) => {
    return (
      <RouterLink 
        classes={A_C.join(' ')} 
        clickHandler={({path, event}) => 
          handleMenuLinkClick({router, path, event})
        }
        key={link.path} 
        path={link.path}
      >
        <i className={link.icon} />
        {link.text}
      </RouterLink>);
  });

  return (
    <nav className={NAV_C.join(' ')} id="drawer_nav">
      {links}
    </nav>
  );
});
