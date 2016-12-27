'use strict';
import Inferno, { linkEvent } from 'inferno';
import { connect } from 'inferno-mobx';
import { action } from 'mobx';
import shortid from 'shortid';

const increment = action('increment', ({cid, store}) => {
  store.counters.filter((counter) => {
    return counter.id === cid;
  })[0].count += 1;
});

const decrement = action('decrement', ({cid, store}) => {
  store.counters.filter((counter) => {
    return counter.id === cid;
  })[0].count -= 1;
});

const deleteCounter = action('deleteCounter', ({cid, store}) => {
  store.counters.remove(store.counters.filter((counter) => {
    return counter.id === cid;
  })[0]);
});

const addCounter = action('addCounter', ({store}) => {
  store.counters.push({id:shortid.generate(), count: 0});
});

export default connect(['store'], function Counters({store}) {
  let counters = store.counters.map((c) => {
    return (
      <div className='counter' key={c.id}>
        <button onClick={linkEvent({cid: c.id, store}, deleteCounter)}>
          {'X'}
        </button>
        {c.count}
        <button onClick={linkEvent({cid: c.id, store}, increment)}>
          {'+'}
        </button>
        <button onClick={linkEvent({cid: c.id, store}, decrement)}>
          {'-'}
        </button>
      </div>
    );
  });

  return (
    <div className='counters'>
      <button onClick={linkEvent({store}, addCounter)}>
        {'Add Counter'}
      </button>
      { counters }
    </div>
  );
});