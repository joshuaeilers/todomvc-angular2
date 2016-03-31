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
    return JSON.stringify(Todo.collection.map((todo) => {
      return {
        title: todo.title,
        completed: todo.completed
      };
    }));
  }
  
  public toggle() {
    this.completed = !this.completed;
    this.save();
  }
  
  public save() {
    let index = Todo.collection.indexOf(this);
    
    if (index >= 0) {
      Todo.collection[index] = this;
    } else {
      Todo.collection.push(this);
    }
    
    // todo - notify there was a change to the collection?
    // subscribe returns an observable, and it emits changes that the app subscribes to?
  }
}