(function() {
    angular.module("toDoApp")
        .component('blankPage', {
            templateUrl: "blank-page/blank-page.component.html",
            controller: blankListController
        })
        .config(function($stateProvider){
            $stateProvider.state("blank",{
                template: "<blank-page></blank-page>",
                url: "/"
            })
        });

    function blankListController(taskListService){
        self.click = taskListService.addList();
    }
})();