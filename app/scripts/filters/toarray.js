'use strict';

/**
 * @ngdoc filter
 * @name leagueChampionsApp.filter:toArray
 * @function
 * @description
 * # toArray
 * Filter in the leagueChampionsApp.
 */
angular.module('leagueChampionsApp')
  .filter('toArray', function () {
    return function (obj) {
      const result = [];
      angular.forEach(obj, function (val) {
        result.push(val);
      });
      return result;
    };
  });
