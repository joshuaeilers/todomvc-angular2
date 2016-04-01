System.register(['angular2/core', '../todo-entry/todo-entry.component'], function(exports_1, context_1) {
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
    var core_1, todo_entry_component_1;
    var TodoListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (todo_entry_component_1_1) {
                todo_entry_component_1 = todo_entry_component_1_1;
            }],
        execute: function() {
            TodoListComponent = (function () {
                function TodoListComponent() {
                }
                TodoListComponent.prototype.onEdit = function (todo) {
                    this.editingTodo = this.editingTodo !== todo ? todo : null;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], TodoListComponent.prototype, "todos", void 0);
                TodoListComponent = __decorate([
                    core_1.Component({
                        selector: 'todo-list',
                        directives: [todo_entry_component_1.TodoEntryComponent],
                        template: "\n    <ul class=\"todo-list\">\n      <li *ngFor=\"#todo of todos\" [class.completed]=\"todo.completed\" [class.editing]=\"editingTodo === todo\">\n        <todo-entry [todo]=\"todo\" (onEdit)=\"onEdit(todo)\"></todo-entry>\n      </li>\n    </ul>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], TodoListComponent);
                return TodoListComponent;
            }());
            exports_1("TodoListComponent", TodoListComponent);
        }
    }
});
//# sourceMappingURL=todo-list.component.js.map