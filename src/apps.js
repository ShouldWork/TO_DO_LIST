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
                console.log(storedLists);
                if (storedLists !== null){
                    console.log("Stored lists: " + storedLists);
                    $state.go("list-body")
                } else {
                    $state.go("blank");
                    console.log("No lists: " + storedLists)
                }
            })
        })
}());