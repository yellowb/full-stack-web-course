noteBookApp = angular.module('noteBookApp', ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '/partials/notes.html',
                controller: 'noteBookCtrl'
            }).otherwise({
            redirectTo: '/'
        });
    });
