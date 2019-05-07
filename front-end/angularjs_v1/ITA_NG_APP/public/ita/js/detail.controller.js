(function () {
    angular
        .module('ita')
        .controller('ita.controller.DetailCtrl', DetailCtrl);

    DetailCtrl.$inject = [
        '$scope',
        '$location',
        '$routeParams'
    ];

    function DetailCtrl($scope, $location, $routeParams) {
        var vm = this;
        vm.domainId = $routeParams.domainId || '';
    }
})();