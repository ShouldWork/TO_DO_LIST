(function(){

    angular.module('toDoApp')
        .factory('Lists', ListFactory);

    function ListFactory(Restangular) {
        return Restangular.all('customers');
    }
})();
