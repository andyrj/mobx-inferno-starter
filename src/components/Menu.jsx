import Inferno from 'inferno';
import { connect, reaction } from 'inferno-mobx';
import Component from 'inferno-component';
import {
  MDCTemporaryDrawer,
  MDCTemporaryDrawerFoundation
} from '@material/drawer';
import Navigation from './Navigation';

// pull in material-components-web/drawer css
require('../../node_modules/@material/drawer/dist/mdc.drawer.css');

@connect(['store'])
export default class Menu extends Component {
  Constructor() {
    let menuToggle = reaction('menuToggle', () => {
      store.displayMenu;
    }, (display) => {
      this.menu.open = display;
    }, false);
  }
  ComponentDidMount() {
    this.menu = new MDCTemporaryDrawer(document.querySelector('#drawer'));
  }
  ComponentWillUnmount() {
    this
      .menu
      .destroy();
  }
  render() {
    return (
      <aside className="mdc-temporary-drawer mdc-typography" id="drawer">
        <nav className="mdc-temporary-drawer__drawer">
          <header className="mdc-temporary-drawer__header">
            <div className="mdc-temporary-drawer__header-content">
              {'Inferno-Mobx-Starter'}
            </div>
          </header>
          <Navigation />
        </nav>
      </aside>
    );
  }
}
