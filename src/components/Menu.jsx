import Inferno from 'inferno';
import Component from 'inferno-component';
import {
  MDCTemporaryDrawer,
  MDCTemporaryDrawerFoundation
} from '@material/drawer';
import Navigation from './Navigation';

// pull in material-components-web/drawer css
require('../../node_modules/@material/drawer/dist/mdc.drawer.css');

//export default () => {
export default class Menu extends Component {
  ComponentDidMount() {
    /* eslint-disable */
    this.menu = new MDCTemporaryDrawer(document.querySelector('#drawer'))
    /* eslint-enable */
  }
  ComponentWillUnmount() {
    this.menu.destroy();
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
          <navigation />
        </nav>
      </aside>
    );
  }
}
