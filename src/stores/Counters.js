/* @flow */
'use strict';
import { observable, computed, action } from 'mobx';
import shortid from 'shortid';

class Counters {
  @observable values = [];

  @action increment(cid) {
    this.values.filter((counter) => {
      return counter.id === cid;
    })[0].count += 1;
  }

  @action decrement(cid) {
    this.values.filter((counter) => {
      return counter.id === cid;
    })[0].count -= 1;
  }
  
  @action deleteCounter(cid) {
    this.values.remove(this.values.filter((counter) => {
      return counter.id === cid;
    })[0]);
  }

  @action addCounter() {
    this.values.push({id:shortid.generate(), count: 0});
  }
}

export default Object.freeze(Counters);
