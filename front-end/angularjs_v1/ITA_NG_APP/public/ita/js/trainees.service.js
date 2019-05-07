(function () {
    angular
        .module('ita')
        .factory('ita.controller.TraineesService', TraineesService);

    TraineesService.$inject = ['$http'];

    function TraineesService($http) {
        return {
            findAllTrainee : findAllTrainee
        };

        function findAllTrainee(callback) {
            var request = {
                method: 'GET',
                url: '/ita/findAllTrainee'
            };

            return $http(request).success(function(data, status, headers) {
                callback(null, data);
            });
        }
    }
})();