'use strict';
import Inferno from 'inferno';

export default function RouterLink({path, classes, clickHandler, children}) {
  return (
    <a
      classNames={classes ? classes : ''}
      href={path}
      onclick={(event) => {clickHandler({path, event})}}
      >
      {children}
    </a>
  );
};
