export class Todo {
  private title: string;
  private completed: boolean;
  
  constructor(title, completed) {
    this.title = title;
    this.completed = completed;
  }
}