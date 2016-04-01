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
                    new Todo('Taste JavaScript', true).save();
                    new Todo('Buy a unicorn', false).save();
                    return Todo.collection;
                };
                Todo.updateCounts = function () {
                    Todo.completedCount = Todo.collection.filter(function (todo) { return todo.completed; }).length;
                    Todo.activeCount = Todo.collection.length - Todo.completedCount;
                };
                Todo.serialize = function () {
                    var content = JSON.stringify(Todo.collection.map(function (todo) { return todo.toString(); }));
                    // persist content to local storage
                };
                Todo.prototype.setCompleted = function (completed) {
                    this.completed = completed;
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
                    Todo.updateCounts();
                    Todo.serialize();
                    // todo - notify there was a change to the collection?
                    // subscribe returns an observable, and it emits changes that the app subscribes to?
                    // basically, it will "observe" the static collection
                    // I guess it's the AppComponent and/or TodoListComponent that should subscribe to changes in here
                    // however, if it just binds to variables, it probably doesn't need to be notified
                };
                Todo.prototype.remove = function () {
                    var index = Todo.collection.indexOf(this);
                    Todo.collection.splice(index, 1);
                    Todo.updateCounts();
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
                Todo.activeCount = 0;
                Todo.completedCount = 0;
                return Todo;
            }());
            exports_1("Todo", Todo);
        }
    }
});
//# sourceMappingURL=todo.js.map