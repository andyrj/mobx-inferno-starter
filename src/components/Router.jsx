'use strict';
import Inferno from 'inferno';
import { connect } from 'inferno-mobx';
import MenuAnchor from './MenuAnchor';
import Menu from './Menu';

export default connect(['router'], function Router({ router }) {
  return (
    <div id='route'>
      <Menu />
      <main>
        {router.routeChildren}
      </main>
    </div>
  );
});
