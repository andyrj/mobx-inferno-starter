/* @flow */
import Inferno from 'inferno';
import { connect } from 'inferno-mobx';
import {
  MDCTemporaryDrawer,
  MDCTemporaryDrawerFoundation
} from '@material/drawer';
import MenuAnchor from '../MenuAnchor';
import Navigation from '../Navigation';
import router from '../../stores';

// pull in Menu style.css
require('./style.css');
// pull in material-components-web/drawer css
require('../../../node_modules/@material/drawer/dist/mdc.drawer.css');

// singleton do not put multiple menus on a page...
const openMenu = (router) => {
  if (router.menu) {
    router.menu.open = true;
  } else {
    router.menu = new MDCTemporaryDrawer(document.querySelector('#drawer'));
    router.menu.open = true;
  }
};

const Menu = connect(['router'], ({ router }) => {
  return (
    <div>
      <MenuAnchor openMenu={() => {openMenu(router);}} />
      <aside className="mdc-temporary-drawer mdc-typography" id="drawer">
        <nav className="mdc-temporary-drawer__drawer">
          <header className="mdc-temporary-drawer__header">
            <div className="mdc-temporary-drawer__header-content">
              {'Mobx-Inferno-Starter'}
            </div>
          </header>
          <Navigation />
        </nav>
      </aside>
    </div>
  );
});

export default Menu;
