(function() {
    angular.module("toDoApp")
        .component('navbar', {
            templateUrl: "nav-bar/nav-bar.component.html",
            controller: navbarController
        });
    function navbarController(taskListService){
        var self = this;
        self.service = taskListService; 
        self.addList = taskListService.addList;
        self.doNothing = doNothing;
        self.activeList = taskListService.activeList;
        self.list =[{title: "Lists",route: "list-tile", doThis: self.doNothing,class: "lists_button"},{title: "New List", route: "tasklist", doThis: self.addList, class: "add_button_small"}];
        self.addItem = addItem;
    }
    function addItem(){
    }
    function doNothing(){
    }
})();