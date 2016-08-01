(function() {
    angular.module("toDoApp")
        .component('aboutPage', {
            templateUrl: "about/about.component.html"
        })
        .config(function($stateProvider){
            $stateProvider.state("about-page",{
                template: "<about-page></about-page>",
                url: "/about"
            })
        });
})();