'use strict';
import Inferno from 'inferno';

const I_C = ['material-icons', 'mdc-list-item__start-detail'];

export default function MenuAnchor({ toggleMenu }) {
  return (
    <div id='menuAnchor'>
      <button
        onClick={toggleMenu}>
        <i className={I_C.join(' ')}>{'menu'}</i>
      </button>
    </div>
  );
};
