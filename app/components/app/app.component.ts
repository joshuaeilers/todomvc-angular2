import {Component} from 'angular2/core';
import {Todo} from '../../models/todo';
import {TodoListComponent} from '../todo-list/todo-list.component';

@Component({
  selector: 'app',
  directives: [TodoListComponent],
  templateUrl: 'app/components/app/app.html'
})
export class AppComponent {
  private todos: Todo[];
  
  constructor() {
    this.todos = Todo.findAll();
  }
}