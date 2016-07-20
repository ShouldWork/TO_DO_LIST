(function() {
    
    angular.module('toDoApp',["ui.router"])
        .config(function($urlRouterProvider){
            $urlRouterProvider.otherwise("/")
        });
}());
