'use strict';

/**
 * @ngdoc service
 * @name leagueChampionsApp.apiCall
 * @description
 * # apiCall
 * Factory in the leagueChampionsApp.
 */
angular.module('leagueChampionsApp')
  .factory('apiCall', function ($http, $q) {
    // Service logic
    // ...
    var key = 'e216a393-aaf6-422c-a98f-106fe7322ada';
    var service = {};
    var meaningOfLife = 42;
    var url = '';

    var makeUrl = function () {
      url = 'https://global.api.pvp.net/api/lol/static-data/euw/v1.2/champion?champData=tags&api_key='+key;
      return url;
    };

    service.getLife = function () {
      return meaningOfLife;
    };

    service.getIndex = function () {
      makeUrl();
      var deferred = $q.defer();
      $http({
        method: 'GET',
        url: url
      }).then(function (response) {
        deferred.resolve(response);
      }, function (response) {
        deferred.reject('There was an error');
      });
      return deferred.promise;
    };

    return service;
  });
