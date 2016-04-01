export class Todo {
  static collection: Todo[] = [];
  
  title: string;
  completed: boolean;
    
  constructor(title, completed) {
    this.title = title;
    this.completed = completed;
  }
  
  static findAll() {
    Todo.collection.push(
      new Todo('Taste JavaScript', true)
    );
    
    Todo.collection.push(
      new Todo('Buy a unicorn', false)
    );
    
    return Todo.collection;
  }
  
  static serialize() {
    let content = JSON.stringify(Todo.collection.map((todo) => todo.toString()));
    // persist content to local storage
  }
  
  toggle() {
    this.completed = !this.completed;
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
    
    Todo.serialize();
    
    // todo - notify there was a change to the collection?
    // subscribe returns an observable, and it emits changes that the app subscribes to?
    // basically, it will "observe" the static collection
    // I guess it's the AppComponent and/or TodoListComponent that should subscribe to changes in here
    // however, if it just binds to variables, it probably doesn't need to be notified
  }
  
  remove() {
    let index = Todo.collection.indexOf(this);
    
    if (index >= 0) {
      Todo.collection.splice(index, 1);
    }
    
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