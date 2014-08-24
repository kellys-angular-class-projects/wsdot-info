'use strict';

/**
 * @ngdoc overview
 * @name wsdotInfoApp
 * @description
 * # wsdotInfoApp
 *
 * Main module of the application.
 */
angular
  .module('wsdotInfoApp', [
        'ngRoute'
    ])

    .config(['$routeProvider',
    function($routeProvider) {
        $routeProvider
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            }).when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            }).otherwise({
                redirectTo: '/'
        });
}]);