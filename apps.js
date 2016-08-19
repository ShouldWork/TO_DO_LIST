
(function(){
    angular.module("toDoApp",
            [
                "ui.router",
                "ngAnimate",
                "ngStorage",
                "ngMaterial",
                "firebase"
            ])
        .config(function($urlRouterProvider){
            $urlRouterProvider.otherwise(function($injector){
                var $state = $injector.get('$state');
            })
        })
}());