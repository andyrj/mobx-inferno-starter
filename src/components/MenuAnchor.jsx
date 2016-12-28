'use strict';
import Inferno from 'inferno';

const I_C = ['mi', 'mi-apps'];

export default function MenuAnchor({ openMenu }) {
  return (
    <button id='menuAnchor' onClick={openMenu}>
      <i className={I_C.join(' ')}></i>
    </button>
  );
};
