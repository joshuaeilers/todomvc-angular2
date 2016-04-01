export class Todo {
  static collection: Todo[] = [];
  static activeCount: number = 0;
  static completedCount: number = 0;
  
  title: string;
  completed: boolean;
    
  constructor(title, completed) {
    this.title = title;
    this.completed = completed;
  }
  
  static findAll() {
    new Todo('Taste JavaScript', true).save();
    new Todo('Buy a unicorn', false).save();
    
    return Todo.collection;
  }
  
  static updateCounts() {
    Todo.completedCount = Todo.collection.filter((todo) => todo.completed).length;
    Todo.activeCount = Todo.collection.length - Todo.completedCount;
  }
  
  static serialize() {
    let content = JSON.stringify(Todo.collection.map((todo) => todo.toString()));
    // persist content to local storage
  }
  
  setCompleted(completed) {
    this.completed = completed;
    this.save();
  }
  
  setTitle(title) {
    this.title = title;
    this.save();
  }
  
  save() {
    let index = Todo.collection.indexOf(this);
    
    if (index < 0) {
      Todo.collection.push(this);
    }
    
    Todo.updateCounts();
    Todo.serialize();
    
    // todo - notify there was a change to the collection?
    // subscribe returns an observable, and it emits changes that the app subscribes to?
    // basically, it will "observe" the static collection
    // I guess it's the AppComponent and/or TodoListComponent that should subscribe to changes in here
    // however, if it just binds to variables, it probably doesn't need to be notified
  }
  
  remove() {
    let index = Todo.collection.indexOf(this);
    
    Todo.collection.splice(index, 1);
    Todo.updateCounts();
    Todo.serialize();
    
    // notify of changes?
  }
  
  toString() {
    return JSON.stringify({
      title: this.title,
      completed: this.completed
    });
  }
}