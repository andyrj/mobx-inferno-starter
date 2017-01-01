'use strict';
import Inferno from 'inferno';
import { connect } from 'inferno-mobx';

require('./style.css');

const I_C = ['mi', 'mi-apps'];

export default ({ openMenu }) => {
  return (
    <button 
      className='mdc-button' 
      id='menuAnchor' 
      onClick={openMenu} 
      tabIndex='0'
    >
      <i className={I_C.join(' ')} />
    </button>
  );
};
