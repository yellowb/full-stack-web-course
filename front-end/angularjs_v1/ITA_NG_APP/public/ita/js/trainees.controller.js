(function () {
    angular
        .module('ita')
        .controller('ita.controller.TraineesCtrl', TraineesCtrl);

    TraineesCtrl.$inject = [
        '$scope',
        '$location',
        'ita.controller.TraineesService'
    ];

    function TraineesCtrl($scope, $location, traSvc) {
        var vm = this;

        vm.trainees = [];

        vm.traineeSelections = [];

        var traineeColumnDefs = [
            { width: '120', displayName: 'Domain ID', field: 'domainId', cellTemplate: '<div class="ui-grid-cell-contents"><a href="#/detail/{{row.entity.domainId}}" target="_blank">{{COL_FIELD}}</a></div>' },
            { width: '150', displayName: 'Name', field: 'name' },
            { width: '150', displayName: 'English Name', field: 'englishName' },
            { width: '200', displayName: 'Major', field: 'major' },
            { width: '100', displayName: 'Gender', field: 'gender' },
            { width: '150', displayName: 'Teacher', field: 'teacher' }
        ];

        vm.traineesOptions = {
            data: 'vm.trainees',
            noUnselect: true,
            multiSelect: false,
            enableRowSelection: true,
            enableSelectAll: true,
            enableColumnResizing: true,
            enableRowHeaderSelection: false,
            modifierKeysToMultiSelect: false,
            columnDefs: traineeColumnDefs,
            selectedItems: vm.traineeSelections,
            enableFiltering: true
        };

        vm.traineesOptions.onRegisterApi = function(gridApi) {
            vm.shipmentGridApi = gridApi;
            gridApi.selection.on.rowSelectionChanged($scope, selectionChange);
        };

        traSvc.findAllTrainee(function(err, trainees) {
            vm.trainees = trainees;
        });

        function selectionChange(row) {
            vm.traineeSelections = row;
        }
    }
})();