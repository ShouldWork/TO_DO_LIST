(function(){
    angular.module("toDoApp")
        .component("favList" , {
            templateUrl: "src/list-favorites/list-favorites.component.html",
            controller: favoritesList
        })
        .config(function($stateProvider){
        $stateProvider.state("list-tile",{
            template: "<fav-list></fav-list>",
            url: "/"
        });
    function favoritesList (taskListService,$location,$state){
        var self = this;
        self.pageClass = 'list-tile';
        self.lists = taskListService.lists;
        self.activeList = taskListService.activeList;
        self.selectList = function(list){
            self.activeList = taskListService.activeList = list;
            $state.go('tasklist');
        };
        self.addList = taskListService.addList;
        self.checkList = taskListService.checkList;
        self.star = taskListService.star;
        self.deleteButton = taskListService.deleteButton;
    }
})(); 