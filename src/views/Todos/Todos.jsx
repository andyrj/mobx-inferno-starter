'use strict';
import Inferno from 'inferno';
import Component from 'inferno-component';
import { connect } from 'inferno-mobx';
/*
import {
  MDCTextfield, 
  MDCTextfieldFoundation
} from '@material/textfield';
*/
import './style.css';

@connect(['todos'])
export default class Todos extends Component {
  filterTextfield: any;
  addTextfield: any;
  todoInput: string;

  componentDidMount() {
    /*
    this.filterTextfield = 
      new MDCTextfield(document.querySelector('#filter-textfield'));
    this.addTextfield = 
      new MDCTextfield(document.querySelector('#add-textfield'));
    */
  }

  render({todos}) {
    let todoItems = todos.filteredTodos.map((todo) => {
      return (
        <li key={todo.id}>
          <div>
            <input 
              checked={todo.completed} 
              id="input" 
              onChange={() => {todos.toggleTodo(todo.id);}} 
              type="checkbox" 
            />
            <label htmlFor="input">{todo.text}</label>
          </div>
        </li>
      );
    });
    
    return (
      <div id='todos'>
        <div />
        <ul>
          <li className='inputLi'>
            <div id='filterControl'>
              <div id='filter-textfield'>
                <input  
                  id="filter-input"
                  onInput={(event) => {
                    todos.setFilter(event.target.value);
                  }}
                  type="text"
                  value={todos.filter}   
                />
                <label  
                  htmlFor="filter-textfield"
                >
                  {'Filter'}
                </label>
              </div>
              <button
                onClick={(event) => {
                  todos.setFilter('');
                  document.getElementById('filter-input').focus();
                }}
              >
                {'Clear'}
              </button>
            </div>
          </li>
          <li className='inputLi'>
            <div id='addControl'>
              <div id='add-textfield'>
                <input  
                  id="newTodo-input"
                  onInput={(event) => {
                    todos.setNewTodo(event.target.value);
                  }}
                  type="text"
                  value={todos.newTodo}
                />
                <label 
                  htmlFor="add-textfield"
                >
                  {'New Todo'}
                </label>
              </div>
              <button
                onClick={() => {
                  todos.addTodo();
                  todos.setNewTodo('');
                  document.getElementById('newTodo-input').focus();
                }}
              >
                {'Add'}
              </button>
            </div>
          </li>
          {todoItems}
        </ul>
      </div>
    );
  }
}