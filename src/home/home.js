(function(angular) {
    var app = angular.module('moviecat_home', ['ngRoute']);

    app.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: './home/home.html',
            controller: 'homeCtrl'
        }).when('/', {
            redirectTo: '/home'
        });
    }]);
    app.controller('homeCtrl', ['$scope', 'qJsonp', '$rootScope', function($scope, qJsonp, $rootScope) {
        $rootScope.active = 'home';
    }]);
})(angular);