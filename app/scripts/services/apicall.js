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
    var key = config.API_KEY;
    var version = '';
    var service = {};
    var index = '';
    var url = '';

    // build url to get the index of champions
    var makeUrlIndex = function () {
      url = 'https://global.api.pvp.net/api/lol/static-data/euw/v1.2/champion?champData=tags&api_key='+key;
      return url;
    };

    // build url to get info of a champion
    var makeUrlChampion = function (id) {
      url = 'https://global.api.pvp.net/api/lol/static-data/euw/v1.2/champion/'+id+'?champData=stats,allytips,enemytips,info,lore,passive,spells,skins,stats,tags&api_key='+key;
      return url;
    };

    // get the index of champions from the api
    service.getIndex = function () {
      console.log("peticion de indice");
      // first make the url to get the index
      makeUrlIndex();
      var deferred = $q.defer();
      // http call with the url for index
      $http({
        method: 'GET',
        url: url
      }).then(function (response) {
        // if everything is ok
        // save the game version
        version = response.data.version;
        // save the index of champions
        index = response.data;
        console.log(index);
        // add the data to promise
        deferred.resolve(response);
      }, function () {
        // if something goes wrong, message error
        deferred.reject('There was an error');
      });
      // returns the promise
      return deferred.promise;
    };

    // gets the version of the game
    service.getVersion = function () {
      var deferred = $q.defer();
      // if the service don't have the version
      if (!version) {
        // call to getIndex to get the version
        service.getIndex().then(function () {
          deferred.resolve(version);
        });
      }else {
        // we already have the version
        console.log("ya tenemos indice");
        deferred.resolve(version);
      }
      // return promise
      return deferred.promise;
    };

    // get champion detailed info
    service.getChampion = function (championKey) {
      var deferred = $q.defer();
      // gets champion id using its key
      var champIndex = index.data[championKey].id;
      // build the url using the champion id
      makeUrlChampion(champIndex);
      // api call to get info of the champion
      $http({
        method: 'GET',
        url: url
      }).then(function (response) {
        // returns the data
        deferred.resolve(response);
      }, function () {
        // returns error message
        deferred.reject('There was an error');
      });
      return deferred.promise;
    };

    return service;
  });
