'use strict';
import Inferno from 'inferno';
import Component from 'inferno-component';
import { connect } from 'inferno-mobx';
import {
  MDCTextfield, 
  MDCTextfieldFoundation
} from '@material/textfield';
import './style.css';

@connect(['todos'])
export default class Todos extends Component {
  filterTextfield: any;
  addTextfield: any;
  todoInput: string;

  componentDidMount() {
    this.filterTextfield = 
      new MDCTextfield(document.querySelector('#filter-textfield'));
    this.addTextfield = 
      new MDCTextfield(document.querySelector('#add-textfield'));
  }

  render({todos}) {
    let todoItems = todos.filteredTodos.map((todo) => {
      return (
        <li className='mdc-list-item list-item' key={todo.id}>
          <div className="mdc-form-field">
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
        <div className='top-spacer' />
        <ul class="mdc-list">
          <li className='inputLi'>
            <div id='filterControl'>
              <div class="mdc-textfield" id='filter-textfield'>
                <input  
                  className="mdc-textfield__input"
                  id="filter-input"
                  onInput={(event) => {
                    todos.setFilter(event.target.value);
                  }}
                  type="text"
                  value={todos.filter}   
                />
                <label 
                  className="mdc-textfield__label" 
                  htmlFor="filter-textfield"
                >
                  {'Filter'}
                </label>
              </div>
              <button
                className="mdc-button mdc-button--accent mdc-button--compact"
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
              <div class="mdc-textfield" id='add-textfield'>
                <input  
                  className="mdc-textfield__input" 
                  id="newTodo-input"
                  onInput={(event) => {
                    todos.setNewTodo(event.target.value);
                  }}
                  type="text"
                  value={todos.newTodo}
                />
                <label 
                  className="mdc-textfield__label" 
                  htmlFor="add-textfield"
                >
                  {'New Todo'}
                </label>
              </div>
              <button
                className="mdc-button mdc-button--accent mdc-button--compact"
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