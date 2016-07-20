(function() {
    angular.module("toDoApp")
        .component('blankPage', {
            templateUrl: "blank-page/blank-page.component.html"
        })
        .config(function($stateProvider){
            $stateProvider.state("blank",{
                template: "<blank-page></blank-page>",
                url: "/"
            })
        })
})();