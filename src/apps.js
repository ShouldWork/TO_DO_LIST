
(function(){
    angular.module("toDoApp",["ui.router","ngStorage"])
        .config(function($urlRouterProvider){
            $urlRouterProvider.otherwise(function($injector){
                var $state = $injector.get('$state');
            })
        })
}());