export class Todo {
  private static collection: Todo[] = [];
  
  private title: string;
  private completed: boolean;
    
  constructor(title, completed) {
    this.title = title;
    this.completed = completed;
  }
  
  public static findAll() {
    Todo.collection.push(
      new Todo('Taste JavaScript', true)
    );
    
    Todo.collection.push(
      new Todo('Buy a unicorn', false)
    );
    
    return Todo.collection;
  }
  
  public static serialize() {
    let content = JSON.stringify(Todo.collection.map((todo) => todo.toString()));
    // persist content to local storage
  }
  
  public toggle() {
    this.completed = !this.completed;
    this.save();
  }
  
  public setTitle(title) {
    this.title = title;
    this.save();
  }
  
  public save() {
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
  
  public remove() {
    let index = Todo.collection.indexOf(this);
    
    if (index >= 0) {
      Todo.collection.splice(index, 1);
    }
    
    Todo.serialize();
    
    // notify of changes?
  }
  
  public toString() {
    return JSON.stringify({
      title: this.title,
      completed: this.completed
    });
  }
}