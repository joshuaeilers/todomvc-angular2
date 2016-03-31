import {Component} from 'angular2/core';
import {Todo} from '../../models/todo';

@Component({
  selector: 'todo',
  template: `
    <li>
      <div class="view">
        <input class="toggle" type="checkbox">
        <label>{{ todo.title }}</label>
        <button class="destroy"></button>
      </div>
      <input class="edit" value="">
    </li>
  `
})
export class TodoComponent {
  private todo: Todo;
  
  constructor(todo) {
    this.todo = todo;
  }
}