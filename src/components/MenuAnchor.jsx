'use strict';
import Inferno, { linkEvent } from 'inferno';
import { connect } from 'inferno-mobx';
import { action } from 'mobx';
import {
  MDCTemporaryDrawer,
  MDCTemporaryDrawerFoundation
} from '@material/drawer';

const I_C = ['material-icons', 'mdc-list-item__start-detail'];

let menu;
const toggleMenu = () => {
  if (menu) {
    menu.open = true;
  } else {
    menu = new MDCTemporaryDrawer(document.querySelector('#drawer'));
    menu.open = true;
  }
};

export default connect(['store'], function MenuAnchor({ store }) {
  return (
    <div id='menuAnchor'>
      <button
        onClick={toggleMenu}>
        <i className={I_C.join(' ')}>{'menu'}</i>
      </button>
    </div>
  );
});
