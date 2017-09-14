(function(angular) {
    var app = angular.module('moviecat_movieList', ['ngRoute', 'qService']);
    app.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/:movieType/:page?', {
            templateUrl: './movieList/movieList.html',
            controller: 'movieListCtrl'
        });
    }]);
    app.controller('movieListCtrl', ['$scope', '$rootScope', '$routeParams', '$route', '$window', 'qJsonp', function($scope, $rootScope, $routeParams, $route, $window, qJsonp) {
        $scope.isShow = true;
        $rootScope.active = $routeParams.movieType;
        $scope.pageSize = 10;
        $scope.pageIndex = +($routeParams.page || '1');
        qJsonp.jsonp({
            url: 'https://api.douban.com/v2/movie/' + $routeParams.movieType,
            data: {
                count: $scope.pageSize,
                start: ($scope.pageIndex - 1) * $scope.pageSize,
                q: $routeParams.q
            },
            callback: function(data) {
                $scope.movies = data;
                $scope.total = data.total;
                $scope.totalPage = $window.Math.ceil($scope.total / $scope.pageSize);
                $scope.isShow = false;
                $scope.$apply();
            }
        });
        $scope.getPage = function(pageIndex) {
            $scope.pageIndex = pageIndex;
            $route.updateParams({
                page: pageIndex
            });
        };
    }]);
})(angular);