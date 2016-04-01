import {Component, EventEmitter, Input, Output} from 'angular2/core';
import {Todo} from '../../models/todo';

@Component({
  selector: 'todo-entry',
  template: `
    <div *ngIf="!editing" class="view">
      <input class="toggle" type="checkbox" [checked]="todo.completed" (click)="toggleStatus($event)">
      <label (dblclick)="toggleMode()">{{ todo.title }}</label>
      <button class="destroy" (click)="remove()"></button>
    </div>
    <input *ngIf="editing" class="edit" value="{{ todo.title }}" (blur)="save($event)" (keydown)="save($event)">
  `
})
export class TodoEntryComponent {
  @Input() todo: Todo;
  @Output() onEdit = new EventEmitter<Todo>();
  editing: boolean;
  
  constructor() {
    this.editing = false;
  }
  
  toggleMode() {
    this.editing = !this.editing;
    this.onEdit.emit(this.todo);
  }
  
  save($event) {
    if (!this.editing) {
      return;
    }
    
    if ($event.keyCode === 27) {
      this.toggleMode();
    } else if ($event.type === 'blur' || $event.keyCode === 13) {
      console.log($event);
      let title = $event.target.value.trim();
      
      if (title.length) {
        this.todo.setTitle(title);
      } else {
        this.todo.remove();
      }
      
      // todo - this is throwing a dehydrated resource error
      this.toggleMode();
    }
  }
  
  toggleStatus($event) {
    this.todo.setCompleted($event.target.checked);
  }
  
  remove() {
    this.todo.remove();
  }
}