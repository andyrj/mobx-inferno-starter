'use strict';
import Inferno from 'inferno';
import { connect } from 'inferno-mobx';
import RouterLink from '../RouterLink';

const handleMenuLinkClick = (router, path) => {
  router.changeRoute(path);
  router.menu.open = false;
};

export default connect(['router'], function Navigation({ router }) {
  let links = router.navLinks.map((link) => {
    return (
      <RouterLink  
        clickHandler={(path, event) => {
          event.preventDefault(); 
          handleMenuLinkClick(router, path);
        }}
        key={link.path} 
        path={link.path}
      >
        <i className={link.icon} />
        {link.text}
      </RouterLink>);
  });

  return (
    <nav id="drawer_nav">
      {links}
    </nav>
  );
});
