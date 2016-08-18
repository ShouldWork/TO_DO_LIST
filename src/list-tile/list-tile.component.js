(function(){
    angular.module("toDoApp")
        .component('listTile', {
            templateUrl: "src/list-tile/list-tile.component.html",
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
    function activeListController (taskListService,$location,$state){
        var self = this;
        self.pageClass = 'list-tile';
        self.lists = taskListService.lists;
        self.activeList = taskListService.activeList;
        self.selectList = function(list){
            self.activeList = taskListService.activeList = list;
            $state.go('tasklist');
            // $location.path("tasklist");
        };
        self.addList = taskListService.addList;
        self.checkList = taskListService.checkList;
        self.star = taskListService.star;
        self.deleteButton = taskListService.deleteButton;
    }
})(); 