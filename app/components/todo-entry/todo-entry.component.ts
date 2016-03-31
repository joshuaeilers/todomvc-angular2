import {Component, Input} from 'angular2/core';
import {Todo} from '../../models/todo';

@Component({
  selector: 'todo-entry',
  template: `
    <div class="view">
      <input class="toggle" type="checkbox" [checked]="todo.completed" (click)="toggleStatus()">
      <label>{{ todo.title }}</label>
      <button class="destroy"></button>
    </div>
    <input class="edit" value="">
  `
})
export class TodoEntryComponent {
  @Input() todo;
  
  toggleStatus() {
    this.todo.completed = !this.todo.completed;
  }
}