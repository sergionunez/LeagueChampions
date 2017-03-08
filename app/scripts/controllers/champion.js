'use strict';

/**
 * @ngdoc function
 * @name leagueChampionsApp.controller:ChampionCtrl
 * @description
 * # ChampionCtrl
 * Controller of the leagueChampionsApp
 */
angular.module('leagueChampionsApp')
  .controller('ChampionCtrl', function (apiCall, $routeParams) {
    var scope = this;
    var key = $routeParams.key;

    console.log("champion key es "+key);

    apiCall.getVersion()
      .then(function (res) {
        scope.version = res;
        scope.champion = apiCall.getChampion(key).
          then(function (data) {
            console.log("datos del campeon");
            console.log(data.data);
            scope.data = data.data;
          })
        console.log("estamos en la version: "+res);
      });



  });
