(function(){
    angular.module("toDoApp")
        .component("listBody" , {
            templateUrl: "list-body/list-body.component.html",
            controller: listBodyController
        })
        .config(function($stateProvider){
            $stateProvider.state("list-body",{
                template: "<list-body></list-body>",
                url: "/lists"
            })
        });
    function listBodyController(taskListService){
        var self = this;
        self.sideMode = false;
        self.selectList = function() {
            self.sideMode = true;
        };
        self.lists = taskListService.lists; 
    }
})(); 