'use strict';
import Inferno, { linkEvent } from 'inferno';
import { connect } from 'inferno-mobx';
import { action } from 'mobx';

const I_C = ['material-icons', 'mdc-list-item__start-detail'];

const toggleMenu = action(({store}) => {
  store.displayMenu = !store.displayMenu;
});

export default connect(['store'], function MenuAnchor({ store }) {
  return (
    <div id='menuAnchor'>
      <button
        onClick={linkEvent({store}, toggleMenu)}>
        <i className={I_C.join(' ')}>{'menu'}</i>
      </button>
    </div>
  );
});
