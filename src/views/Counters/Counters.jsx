/* @flow */
'use strict';
import Inferno from 'inferno';
import { connect } from 'inferno-mobx';
import './style.css';

const BTN_C = 'mdc-button mdc-button--primary mdc-button--raised';
const ACTION_BTN_C = 'mdc-button mdc-button--accent mdc-button--compact';

export default connect(['counters'], function Counters({counters}) {
  let _counters = counters.values.map((c) => {
    return (
      <div className='mdc-card' key={c.id}>
        <section className='mdc-card__primary'>
          <button 
            className={ACTION_BTN_C} 
            onClick={() => counters.deleteCounter(c.id)}
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
            onClick={() => counters.increment(c.id)}
          >
            {'+'}
          </button>
          <button 
            className={ACTION_BTN_C} 
            onClick={() => counters.decrement(c.id)}
          >
            {'-'}
          </button>
        </section>
      </div>
    );
  });

  return (
    <div className='counters'>
      <button 
        className={BTN_C} 
        id='addBtn' 
        onClick={() => counters.addCounter()}
      >
        {'Add Counter'}
      </button>
      <div id='countersSpacer' />
      { _counters }
    </div>
  );
});