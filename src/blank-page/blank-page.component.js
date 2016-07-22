(function() {
    angular.module("toDoApp")
        .component('blankPage', {
            templateUrl: "blank-page/blank-page.component.html",
            controller: aboutController
        })
        .config(function($stateProvider){
            $stateProvider.state("blank",{
                template: "<blank-page></blank-page>",
                url: "/"
            })
        });

    function aboutController(taskListService){
        self.click = taskListService.addList();
    }
})();