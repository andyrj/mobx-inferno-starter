'use strict';
import Inferno from 'inferno';
import { action } from 'mobx';
import store from '../store';

const changeRoute = action('changeRoute', (path, event) => {
  debugger;
  event.preventDefault();
  store.path = path;
});

export default function RouterLink({path, classes, children}) {
  // Bug is on line 18 here, change this code to onclick instead of onClick and it works fine...
  return (
    <a
      classNames={classes ? classes : ''}
      href={path}
      onClick={(event) => {debugger; changeRoute(path, event)}}
      >
      {children}
    </a>
  );
}
