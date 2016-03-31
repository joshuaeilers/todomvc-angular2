import {Component, Input} from 'angular2/core';
import {Todo} from '../../models/todo';
import {TodoEntryComponent} from '../todo-entry/todo-entry.component';

@Component({
  selector: 'todo-list',
  directives: [TodoEntryComponent],
  template: `
    <ul class="todo-list">
      <li *ngFor="#todo of todos" [class.completed]="todo.completed">
        <todo-entry [todo]="todo"></todo-entry>
      </li>
    </ul>
  `
})
export class TodoListComponent {
  @Input()
  todos: Todo[];
}