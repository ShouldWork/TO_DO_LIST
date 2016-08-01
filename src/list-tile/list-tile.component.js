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
                url: "/lists"
            })
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
        self.testIndex = 0;
        self.styleize = stylelize;
        self.addList = taskListService.addList;

        function stylelize(){
            $(".list_tile").css("background-color","purple");
        }
    }
})(); 