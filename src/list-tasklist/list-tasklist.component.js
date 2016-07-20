(function() {
    angular.module("toDoApp")
        .component('tasklist', {
            templateUrl: "list-tasklist/list-tasklist.component.html",
            controller: tasklistController
        })
        .config(function($stateProvider){
            $stateProvider.state("tasklist",{
                template: "<tasklist></tasklist>",
                url: "/tasklist"
            })
        });
    
    function tasklistController(){
        var self = this; 
        this.newList = function(title){
            console.log("this is a new list " + title); 
        };
        this.todoList = [{taskText: "Do that thing", done: false},{taskText: "Another thing", done: false}];
    }
    
})();