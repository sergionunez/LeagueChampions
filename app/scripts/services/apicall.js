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
    var version = '';
    var service = {};
    var index = '';
    var meaningOfLife = 42;
    var url = '';

    var makeUrlIndex = function () {
      url = 'https://global.api.pvp.net/api/lol/static-data/euw/v1.2/champion?champData=tags&api_key='+key;
      return url;
    };

    var makeUrlChampion = function (id) {
      url = 'https://global.api.pvp.net/api/lol/static-data/euw/v1.2/champion/'+id+'?champData=stats,allytips,enemytips,info,lore,passive,spells,skins,stats,tags&api_key='+key;
      return url;
    }

    service.getLife = function () {
      return meaningOfLife;
    };

    service.getIndex = function () {
      console.log("peticion de indice");
      makeUrlIndex();
      var deferred = $q.defer();
      $http({
        method: 'GET',
        url: url
      }).then(function (response) {
        version = response.data.version;
        index = response.data;
        console.log(index);
        deferred.resolve(response);
      }, function () {
        deferred.reject('There was an error');
      });
      return deferred.promise;
    };

    service.getVersion = function () {
      var deferred = $q.defer();
      if (!version) {
        service.getIndex().then(function (index) {
          deferred.resolve(version);
        });
      }else {
        console.log("ya tenemos indice");
        deferred.resolve(version);
      }
      return deferred.promise;
    };

    service.getChampion = function (championKey) {
      var deferred = $q.defer();
      var champIndex = index.data[championKey].id;
      makeUrlChampion(champIndex);
      $http({
        method: 'GET',
        url: url
      }).then(function (response) {
        deferred.resolve(response);
      }, function () {
        deferred.reject('There was an error');
      });
      return deferred.promise;
    };

    return service;
  });
