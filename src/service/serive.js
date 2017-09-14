(function(angular) {
    var app = angular.module('qService', []);
    app.service('qJsonp', ['$window', function($window) {
        this.jsonp = function(option) {
            var url = option.url + '?';
            if (option.data) {
                for (var key in option.data) {
                    url += key + '=' + option.data[key] + '&';
                }
            }

            var callbackName = 'callback' + (+new Date);
            url += 'callback=' + callbackName;

            $window[callbackName] = option.callback;
            var script = $window.document.createElement('script');
            script.src = url;
            $window.document.body.appendChild(script);
        };
    }]);
})(angular);