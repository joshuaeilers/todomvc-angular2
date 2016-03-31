import {Component} from 'angular2/core';
import {Todo} from '../../models/todo';

@Component({
  selector: 'app',
  templateUrl: 'app/components/app/app.html'
})
export class AppComponent {
  private todos: Todo[] = [];
  
  constructor() {
    this.todos.push(
      new Todo('Taste JavaScript', true)
    );
    this.todos.push(
      new Todo('Buy a unicorn', false)
    );
  }
}