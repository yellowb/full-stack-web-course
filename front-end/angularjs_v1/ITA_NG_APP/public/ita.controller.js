(function(){
    angular
        .module('ita')
        .controller('ita.ctrl.MainCtrl', MainCtrl);

    MainCtrl.$inject = [
        '$scope',
        '$rootScope',
        '$location',
        '$timeout'
    ];

    function MainCtrl(
        $scope,
        $rootScope,
        $location,
        $timeout
    ) {
        var vm = this;
    }
})();