import {Component} from 'angular2/core';
import {Todo} from '../../models/todo';
import {TodoListComponent} from '../todo-list/todo-list.component';

@Component({
  selector: 'app',
  directives: [TodoListComponent],
  templateUrl: 'app/components/app/app.html'
})
export class AppComponent {
  todos: Todo[];
  
  constructor() {
    this.todos = Todo.findAll();
  }
  
  activeCount() {
    return Todo.collection.filter((todo) => !todo.completed).length;
  }
  
  pluralize(word, count) {
    return count === 1 ? word : word + 's';
  }
}