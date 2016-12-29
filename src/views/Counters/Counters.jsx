'use strict';
import Inferno from 'inferno';
import { connect } from 'inferno-mobx';
import { action } from 'mobx';
import './style.css';

const BTN_C = 'mdc-button mdc-button--primary mdc-button--raised';
const ACTION_BTN_C = 'mdc-button mdc-button--accent mdc-button--compact';

export default connect(['counterStore'], function Counters({counterStore}) {
  let counters = counterStore.values.map((c) => {
    return (
      <div className='mdc-card' key={c.id}>
        <section className='mdc-card__primary'>
          <button 
            className={ACTION_BTN_C} 
            onClick={() => counterStore.deleteCounter(c.id)}
          >
            {'X'}
          </button>
        </section>
        <section className='mdc-card__supporting-text'>
          {c.count}
        </section>
        <section className='mdc-card__actions'>
          <button 
            className={ACTION_BTN_C} 
            onClick={() => counterStore.increment(c.id)}
          >
            {'+'}
          </button>
          <button 
            className={ACTION_BTN_C} 
            onClick={() => counterStore.decrement(c.id)}
          >
            {'-'}
          </button>
        </section>
      </div>
    );
  });

  return (
    <div className='counters'>
      <button className={BTN_C} onClick={() => counterStore.addCounter()}>
        {'Add Counter'}
      </button>
      { counters }
    </div>
  );
});