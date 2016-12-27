import Inferno from 'inferno';
import { connect } from 'inferno-mobx';
import Component from 'inferno-component';
import { reaction } from 'mobx';
import Navigation from './Navigation';

// pull in material-components-web/drawer css
require('../../node_modules/@material/drawer/dist/mdc.drawer.css');

export default () => {
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
};

