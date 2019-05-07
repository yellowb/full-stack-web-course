(function() {
    var dependency = [
        'ngRoute',
        'ui.grid',
        'ui.grid.selection',
        'ui.grid.resizeColumns'
    ];

    angular.module('ita', dependency);

    angular.module('ita')
        .run(run);

    run.$inject = [
        '$rootScope',
        '$location',
        '$route'
    ];

    function run($rootScope, $location, $route) {
        var original = $location.path;
        $location.path = function (path, reload) {
            if (reload === false) {
                var lastRoute = $route.current;
                var un = $rootScope.$on('$locationChangeSuccess', function () {
                    $route.current = lastRoute;
                    un();
                });
            }
            return original.apply($location, [path]);
        };
    }
})();
