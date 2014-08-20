define(['angular'] , function(angular) {

    var app = angular.module('controllers.ProjectControllers', ['restangular', 'ui.router'])

    app.controller('ProjectCreateController', ['$scope', function($scope) {
        $scope.project = {}

        $scope.save = function () {

            Restangular.all('projects').post($scope.project).then(function(result) {
                $state.go('^')
            })

        }

    }])

    app.controller('ProjectListController', ['$scope', 'Restangular', function($scope, Restangular) {
        $scope.projects = [];
        var projects = Restangular.all('projects')

        projects.getList({ page: 1}).then(function(result) {
            console.log(result)
            $scope.projects = result;
        })

    }])

    return app;

})