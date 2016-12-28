'use strict';
import Inferno from 'inferno';
import { action } from 'mobx';
import store from '../store';

const changeRoute = action('changeRoute', (path, event) => {
  event.preventDefault();
  store.path = path;
});

export default function RouterLink({path, classes, children}) {
  return (
    <a
      classNames={classes ? classes : ''}
      href={path}
      onclick={(event) => {changeRoute(path, event)}}
      >
      {children}
    </a>
  );
}
