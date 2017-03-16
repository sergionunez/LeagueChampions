'use strict';

/**
 * @ngdoc directive
 * @name leagueChampionsApp.directive:champStrategy
 * @description
 * # champStrategy
 */
angular.module('leagueChampionsApp')
  .directive('champStrategy', function () {
    return {
      templateUrl: '/views/directive/champ-strategy.html',
      restrict: 'E',
      scope: {
        name: '@name',
        allytips: '=',
        enemytips: '='
      },
      // link: function postLink(scope, element, attrs) {
      //   element.text('this is the champStrategy directive');
      // }
    };
  });
