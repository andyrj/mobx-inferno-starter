'use strict';
import Inferno from 'inferno';
import { connect } from 'inferno-mobx';
import MenuAnchor from './MenuAnchor';
import Menu, { onDidMount, onWillUnmount } from './Menu';

export default connect(['routerStore'], function Router({ routerStore }) {
  return (
    <div id='route'>
      <Menu onComponentDidMount={onDidMount} onComponentWillUnmount={onWillUnmount}/>
      <main>
        {routerStore.routeChildren}
      </main>
    </div>
  );
});
