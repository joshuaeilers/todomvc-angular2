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
                return Todo;
            }());
            exports_1("Todo", Todo);
        }
    }
});
//# sourceMappingURL=todo.js.map