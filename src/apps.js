// (function() {
//
//     angular.module('toDoApp',["ui.router"])
//         .config(function($urlRouterProvider){
//             $urlRouterProvider.otherwise(function($injector){
//
//                 var $state = $injector.get('$state');
//                 var Storage = $injector.get('Storage');
//
//                 if (Storage.has('authToken')) {
//                     $state.go('home');
//                 }
//                 else {
//                     $state.go('login');
//                 }
//
//             });
// }());
//

(function(){
    angular.module("toDoApp",["ui.router"])
        .config(function($urlRouterProvider){
            $urlRouterProvider.otherwise(function($injector){
                var $state = $injector.get('$state');
                var storedLists = localStorage.storedLists;

                if (storedLists !== undefined){
                    console.log(storedLists[0]);
                    $state.go("list-body")
                } else {
                    $state.go("blank");
                    console.log(storedLists)
                }
            })
        })
}());