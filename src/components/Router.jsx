'use strict';
import Inferno from 'inferno';
import { connect } from 'inferno-mobx';
import MenuAnchor from './MenuAnchor';
import Menu, { mounted, unmounted } from './Menu';

export default connect(['store'], function Router({ store }) {
  return (
    <div id='route'>
      <MenuAnchor />
      <Menu />
      <main>
        {store.routeChildren}
      </main>
    </div>
  );
});
