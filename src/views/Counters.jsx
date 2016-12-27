'use strict';
import Inferno, { linkEvent } from 'inferno';
import { connect } from 'inferno-mobx';
import { action } from 'mobx';
import { shortid } from 'shortid';

const increment = ({cid, store}) => {
  action('incrementCounter', () => {
    store.counters[cid] += 1;
  });
};

const decrement = ({cid, store}) => {
  action('decrementCounter', () => {
    store.counters[cid] -= 1;
  });
};

const deleteCounter = ({cid, store}) => {
  action('deleteCounter', () => {
    store.counters.splice(cid, 1);
  });
};

const addCounter = ({store}) => {
  action('addCounter', () => {
    store.counters.push({id:shortid.generate(), count: 0});
  });
};

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