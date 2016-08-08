(function() {
    angular.module("toDoApp")
        .component('navbar', {
            templateUrl: "src/nav-bar/nav-bar.component.html",
            controller: navbarController
        });
    function navbarController(taskListService){
        var self = this;
        self.service = taskListService; 
        self.addList = taskListService.addList;
        self.doNothing = doNothing;
        self.activeList = taskListService.activeList;
        self.buttonlist = taskListService.buttonlist;
        self.addItem = addItem;
    }
    function addItem(){
    }
    function doNothing(){
    }
})();