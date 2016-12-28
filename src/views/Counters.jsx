'use strict';
import Inferno from 'inferno';
import { connect } from 'inferno-mobx';
import { action } from 'mobx';

export default connect(['counterStore'], function Counters({counterStore}) {
  let counters = counterStore.values.map((c) => {
    return (
      <div className='counter' key={c.id}>
        <button onClick={() => counterStore.deleteCounter(c.id)}>
          {'X'}
        </button>
        {c.count}
        <button onClick={() => counterStore.increment(c.id)}>
          {'+'}
        </button>
        <button onClick={() => counterStore.decrement(c.id)}>
          {'-'}
        </button>
      </div>
    );
  });

  return (
    <div className='counters'>
      <button onClick={() => counterStore.addCounter()}>
        {'Add Counter'}
      </button>
      { counters }
    </div>
  );
});