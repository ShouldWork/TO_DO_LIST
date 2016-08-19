(function() {
    angular.module("toDoApp")
        .component('aboutPage', {
            templateUrl: "src/about/about.component.html"
        })
        .config(function($stateProvider){
            $stateProvider.state("about-page",{
                template: "<about-page></about-page>",
                url: "src/about"
            })
        });
})();