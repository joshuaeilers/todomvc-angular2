import {Component, Input} from 'angular2/core';
import {Todo} from '../../models/todo';
import {TodoEntryComponent} from '../todo-entry/todo-entry.component';

@Component({
  selector: 'todo-list',
  directives: [TodoEntryComponent],
  template: `
    <ul class="todo-list">
      <li *ngFor="#todo of todos" [class.completed]="todo.completed" [class.editing]="editingTodo === todo">
        <todo-entry [todo]="todo" (onEdit)="onEdit(todo)"></todo-entry>
      </li>
    </ul>
  `
})
export class TodoListComponent {
  @Input()
  todos: Todo[];
  editingTodo: Todo;
  
  onEdit(todo) {    
    this.editingTodo = this.editingTodo !== todo ? todo : null;
  }
}