(function(){

    angular.module('ita')
        .config(config)
        .run(run);

    config.$inject = [
        '$routeProvider',
        '$locationProvider'
    ];

    run.$inject = [
        '$location',
        '$rootScope'
    ];

    function config(
        $routeProvider,
        $locationProvider) {

        $locationProvider.hashPrefix('');

        $routeProvider
            .when ("/index", {
                templateUrl: "ita/login.html",
                controller: "ita.controller.LoginCtrl",
                controllerAs: 'vm',
                title: 'ITA - AngularJS Simples'
            }).when ("/trainees", {
                templateUrl: "ita/trainees.html",
                controller: "ita.controller.TraineesCtrl",
                controllerAs: 'vm',
                title: 'ITA - Trainees'
            }).when ("/detail/:domainId", {
                templateUrl: "ita/detail.html",
                controller: "ita.controller.DetailCtrl",
                controllerAs: 'vm',
                title: 'ITA - Trainee detail'
            }).otherwise({
                redirectTo: '/index'
            });
    }

    function run($location, $rootScope) {
        $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
            if (current.hasOwnProperty('$$route')) {
                $rootScope.title = current.$$route.title;
            }
        });
    }
})();
