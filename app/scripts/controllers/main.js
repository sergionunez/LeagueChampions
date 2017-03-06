'use strict';

/**
 * @ngdoc function
 * @name leagueChampionsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the leagueChampionsApp
 */
angular.module('leagueChampionsApp')
  .controller('MainCtrl', function (apiCall) {
    // asignamos scope a una variable
    var scope=this;
    // pedimos lista
    apiCall.getIndex().
      then(function (data) {
        // lista obtenida
        scope.index = data.data.data;
        scope.version = data.data.version;
        console.log(scope.version);
        console.log(scope.index);
      },function (data) {
        // error
        console.log(data);
      });
  });
