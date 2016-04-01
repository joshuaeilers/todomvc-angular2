import {Component, Input} from 'angular2/core';
import {Todo} from '../../models/todo';

@Component({
  selector: 'todo-entry',
  template: `
    <div class="view">
      <input class="toggle" type="checkbox" [checked]="todo.completed" (click)="toggleStatus($event)">
      <label>{{ todo.title }}</label>
      <button class="destroy" (click)="remove()"></button>
    </div>
    <input class="edit" value="">
  `
})
export class TodoEntryComponent {
  @Input() todo: Todo;
  
  toggleStatus($event) {
    this.todo.setCompleted($event.target.checked);
  }
  
  remove() {
    this.todo.remove();
  }
}