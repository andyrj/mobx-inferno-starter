'use strict';
import Inferno, { linkEvent } from 'inferno';
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
      onClick={linkEvent(path, changeRoute)}
      >
      {children}
    </a>
  );
}
