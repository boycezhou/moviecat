(function(angular) {
    var app = angular.module('moviecat', ['moviecat_home', 'moviecat_details', 'moviecat_movieList']);
    app.config(['$locationProvider', function($locationProvider) {
        $locationProvider.hashPrefix("");
    }]);

    app.controller('searchCtrl', ['$scope', '$window', function($scope, $window) {
        $scope.search = function() {
            $window.location.hash = '#/search?q=' + $scope.val
        };
    }]);
})(angular);