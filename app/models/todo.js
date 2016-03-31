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
                    return JSON.stringify(Todo.collection.map(function (todo) {
                        return {
                            title: todo.title,
                            completed: todo.completed
                        };
                    }));
                };
                Todo.prototype.toggle = function () {
                    this.completed = !this.completed;
                    this.save();
                };
                Todo.prototype.save = function () {
                    var index = Todo.collection.indexOf(this);
                    if (index >= 0) {
                        Todo.collection[index] = this;
                    }
                    else {
                        Todo.collection.push(this);
                    }
                    // todo - notify there was a change to the collection?
                    // subscribe returns an observable, and it emits changes that the app subscribes to?
                };
                Todo.collection = [];
                return Todo;
            }());
            exports_1("Todo", Todo);
        }
    }
});
//# sourceMappingURL=todo.js.map