(function(){
    angular.module("toDoApp")
        .component('listTile', {
            templateUrl: "list-tile/list-tile.component.html",
            controller: activeListController,
            bindings:{
                selectList: "&"
            }
        });
    function activeListController (){
        var self = this; 
        self.isActive = false;
    }
})(); 