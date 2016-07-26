(function(){
    angular.module("toDoApp")
        .component('listTile', {
            templateUrl: "list-tile/list-tile.component.html",
            controller: activeListController,
            bindings:{
                selectList: "&",
                list: "<"
            }
        });
    function activeListController (taskListService){
        var self = this; 
        self.lists = taskListService.lists; 
        self.isActive = false;
        self.activeList = taskListService.activeList;
        self.selectList = function(list){
            console.log(list);
            taskListService.activeList = list;
        };
    }
})(); 