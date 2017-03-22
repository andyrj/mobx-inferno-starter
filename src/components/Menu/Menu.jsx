'use strict';
import Inferno from 'inferno';
import { connect } from 'inferno-mobx';
/*
import {
  MDCTemporaryDrawer,
  MDCTemporaryDrawerFoundation
} from '@material/drawer';
*/
import MenuAnchor from '../MenuAnchor';
import Navigation from '../Navigation';
import router from '../../stores';

// pull in Menu style.css
require('./style.css');

// singleton do not put multiple menus on a page...
const openMenu = (router) => {
  if (router.menu) {
    router.menu.open = true;
  } else {
    //router.menu = new MDCTemporaryDrawer(document.querySelector('#drawer'));
    router.menu.open = true;
  }
};

const Menu = connect(['router'], ({ router }) => {
  return (
    <div>
      <MenuAnchor openMenu={() => {openMenu(router);}} />
      <aside id="drawer">
        <nav>
          <header>
            <div>
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
