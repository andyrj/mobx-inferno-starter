/* @flow */
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
            <input type="checkbox" id="input" checked={todo.completed} />
            <label for="input">{todo.text}</label>
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
                  id="filter-textfield"  
                  type="text" 
                />
                <label 
                  className="mdc-textfield__label" 
                  for="filter-textfield"
                >
                  {'Filter'}
                </label>
              </div>
            </div>
          </li>
          <li className='inputLi'>
            <div id='addControl'>
              <div class="mdc-textfield" id='add-textfield'>
                <input  
                  className="mdc-textfield__input" 
                  id="newTodo-textfield"  
                  type="text" 
                />
                <label 
                  className="mdc-textfield__label" 
                  for="newTodo-textfield"
                >
                  {'New Todo'}
                </label>
              </div>
              <button
                className="mdc-button mdc-button--accent mdc-button--compact"
                onClick={() => {todos.addTodo('test');}} 
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