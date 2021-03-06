System.register(['angular2/core', '../../models/todo', '../todo-list/todo-list.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, todo_1, todo_list_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (todo_1_1) {
                todo_1 = todo_1_1;
            },
            function (todo_list_component_1_1) {
                todo_list_component_1 = todo_list_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.todos = todo_1.Todo.findAll();
                    this.newTitle = '';
                }
                AppComponent.prototype.add = function ($event) {
                    if ($event.keyCode === 13) {
                        var title = this.newTitle.trim();
                        if (title.length) {
                            new todo_1.Todo(this.newTitle, false).save();
                            this.newTitle = '';
                        }
                    }
                };
                AppComponent.prototype.toggleAll = function () {
                    var toggle = false;
                    if (this.completedCount() < this.totalCount()) {
                        toggle = true;
                    }
                    todo_1.Todo.collection.forEach(function (todo) { return todo.setCompleted(toggle); });
                };
                AppComponent.prototype.clearCompleted = function () {
                    todo_1.Todo.collection.filter(function (todo) { return todo.completed; }).forEach(function (todo) { return todo.remove(); });
                };
                AppComponent.prototype.activeCount = function () {
                    return todo_1.Todo.activeCount;
                };
                AppComponent.prototype.completedCount = function () {
                    return todo_1.Todo.completedCount;
                };
                AppComponent.prototype.totalCount = function () {
                    return todo_1.Todo.collection.length;
                };
                AppComponent.prototype.pluralize = function (word, count) {
                    return count === 1 ? word : word + 's';
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'app',
                        directives: [todo_list_component_1.TodoListComponent],
                        templateUrl: 'app/components/app/app.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map