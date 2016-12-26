'use strict';
import Inferno, { linkEvent } from 'inferno';
import { action } from 'mobx';
import store from '../store';

const changeRoute = (path, event) => {
  event.preventDefault();
  action('changeRoute', () => {
    store.path = path;
  });
};

export default function ({path, classes, children}) {
  return (
    <a classNames={classes} href={path} onClick={linkEvent(path, changeRoute)}>
      {children}
    </a>
  );
}
