(function(angular) {
    var app = angular.module('moviecat_details', ['ngRoute']);
    app.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/details/:id', {
            templateUrl: './details/details.html',
            controller: 'detailsCtrl'
        });
    }]);
    app.controller('detailsCtrl', ['$scope', '$routeParams', 'qJsonp', function($scope, $routeParams, qJsonp) {
        $scope.isShow = true;
        qJsonp.jsonp({
            url: 'https://api.douban.com/v2/movie/subject/' + $routeParams.id,
            callback: function(data) {
                console.log(data);
                $scope.data = data;
                $scope.isShow = false;
                $scope.$apply();

            }
        });
    }]);
})(angular);