
(function(){
    angular.module("toDoApp",
            [
                "ui.router",
                "ngAnimate",
                "ngStorage"
            ])
        .config(function($urlRouterProvider){
            $urlRouterProvider.otherwise(function($injector){
                var $state = $injector.get('$state');
            })
        })
}());