(function(){
    angular.module("toDoApp")
        .component("listBody" , {
            templateUrl: "list-body/list-body.component.html",
            controller: listBodyController
        });
    function listBodyController(){
        var self = this;
        self.sideMode = false;
        self.selectList = function() {
            self.sideMode = true; 
        }
    }
})(); 