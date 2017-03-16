'use strict';

/**
 * @ngdoc directive
 * @name leagueChampionsApp.directive:champStats
 * @description
 * # champStats
 */
angular.module('leagueChampionsApp')
  .directive('champStats', function () {
    return {
      templateUrl: '/views/directive/champ-stats.html',
      restrict: 'E',
      scope: {
        stats: '='
      },
      // link: function postLink(scope, element, attrs) {
      //   element.text('this is the champStats directive');
      // }
    };
  });
