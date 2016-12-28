'use strict';
import Inferno from 'inferno';

const I_C = ['mi', 'mi-apps'];

export default function MenuAnchor({ toggleMenu }) {
  return (
    <button id='menuAnchor' onClick={toggleMenu}>
      <i className={I_C.join(' ')}></i>
    </button>
  );
};
