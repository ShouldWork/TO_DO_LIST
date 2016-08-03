(function(){
    angular.module("toDoApp")
        .component('listTile', {
            templateUrl: "list-tile/list-tile.component.html",
            controller: activeListController,
            bindings:{
                selectList: "&",
                list: "<"
            }
        })
        .config(function($stateProvider){
            $stateProvider.state("list-tile",{
                template: "<list-tile></list-tile>",
                url: "/"
            })
        });
    function activeListController (taskListService,$location){
        var self = this; 
        self.lists = taskListService.lists;
        self.activeList = taskListService.activeList;
        self.selectList = function(list){
            self.activeList = taskListService.activeList = list;
            $location.path("tasklist");
        };
        self.addList = taskListService.addList;
        self.checkList = taskListService.checkList;
        self.star = taskListService.star;
        self.deleteButton = taskListService.deleteButton;
    }
})(); 