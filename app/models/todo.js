System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Todo;
    return {
        setters:[],
        execute: function() {
            Todo = (function () {
                function Todo(title, completed) {
                    this.title = title;
                    this.completed = completed;
                }
                Todo.findAll = function () {
                    Todo.collection.push(new Todo('Taste JavaScript', true));
                    Todo.collection.push(new Todo('Buy a unicorn', false));
                    return Todo.collection;
                };
                Todo.serialize = function () {
                    var content = JSON.stringify(Todo.collection.map(function (todo) { return todo.toString(); }));
                    // persist content to local storage
                };
                Todo.prototype.toggle = function () {
                    this.completed = !this.completed;
                    this.save();
                };
                Todo.prototype.setTitle = function (title) {
                    this.title = title;
                    this.save();
                };
                Todo.prototype.save = function () {
                    var index = Todo.collection.indexOf(this);
                    if (index < 0) {
                        Todo.collection.push(this);
                    }
                    Todo.serialize();
                    // todo - notify there was a change to the collection?
                    // subscribe returns an observable, and it emits changes that the app subscribes to?
                    // basically, it will "observe" the static collection
                    // I guess it's the AppComponent and/or TodoListComponent that should subscribe to changes in here
                    // however, if it just binds to variables, it probably doesn't need to be notified
                };
                Todo.prototype.remove = function () {
                    var index = Todo.collection.indexOf(this);
                    if (index >= 0) {
                        Todo.collection.splice(index, 1);
                    }
                    Todo.serialize();
                    // notify of changes?
                };
                Todo.prototype.toString = function () {
                    return JSON.stringify({
                        title: this.title,
                        completed: this.completed
                    });
                };
                Todo.collection = [];
                return Todo;
            }());
            exports_1("Todo", Todo);
        }
    }
});
//# sourceMappingURL=todo.js.map