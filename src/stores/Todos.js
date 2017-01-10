'use strict';
import { observable, computed, action } from 'mobx';
import shortid from 'shortid';

class Todos {
  @observable values = [];
  @observable filter = '';
  @observable newTodo = '';

  @action setNewTodo(text) {
    this.newTodo = text;
  }

  @action addTodo() {
    this.values.push({
        id: shortid.generate(), 
        text: this.newTodo, 
        completed: false
    });
  }

  @action deleteTodo(tid) {
    this.values.remove(this.values.filter((todo) => {
      return todo.id === tid;
    })[0]);
  }

  @action toggleTodo(tid) {
    let todo = this.values.filter((todo) => {
      return todo.id === tid;
    })[0];
    todo.completed = !todo.completed;
  }

  @action setFilter(text) {
    this.filter = text;
  }

  clearFilter() {
    this.setFilter('');
  }

  @computed get filteredTodos() {
    let ret = this.values;
    if (this.filter !== '') {
      ret = this.values.filter((todo) => {
        if (todo.text.indexOf(this.filter) > -1) {
          return true;
        }
      });
    }
    return ret;
  }
}

export default Object.freeze(Todos);