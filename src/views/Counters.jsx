'use strict';
import Inferno from 'inferno';
import { connect } from 'inferno-mobx';
import { action } from 'mobx';

export default connect(['store'], function Counters({store}) {
  let counters = store.counters.map((c) => {
    return (
      <div className='counter' key={c.id}>
        <button onClick={() => store.deleteCounter(c.id)}>
          {'X'}
        </button>
        {c.count}
        <button onClick={() => store.increment(c.id)}>
          {'+'}
        </button>
        <button onClick={() => store.decrement(c.id)}>
          {'-'}
        </button>
      </div>
    );
  });

  return (
    <div className='counters'>
      <button onClick={() => store.addCounter()}>
        {'Add Counter'}
      </button>
      { counters }
    </div>
  );
});