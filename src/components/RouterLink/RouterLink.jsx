'use strict';
import Inferno from 'inferno';

export default function RouterLink({path, classes, clickHandler, children}) {
  return (
    <a
      className={classes ? classes : ''}
      href={path}
      onclick={(event) => {
        event.preventDefault();
        clickHandler(path, event);
      }}
    >
      {children}
    </a>
  );
}
