'use strict';

/**
 * @ngdoc overview
 * @name leagueChampionsApp
 * @description
 * # leagueChampionsApp
 *
 * Main module of the application.
 */
angular
  .module('leagueChampionsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/champion/:key', {
        templateUrl: 'views/champion.html',
        controller: 'ChampionCtrl',
        controllerAs: 'champion'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
