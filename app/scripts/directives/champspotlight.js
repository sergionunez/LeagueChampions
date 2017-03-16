'use strict';

/**
 * @ngdoc directive
 * @name leagueChampionsApp.directive:champSpotlight
 * @description
 * # champSpotlight
 */
angular.module('leagueChampionsApp')
  .directive('champSpotlight', function () {
    return {
      templateUrl: '/views/directive/champ-spotlight.html',
      restrict: 'E',
      // link: function postLink(scope, element, attrs) {
      //   element.text('this is the champSpotlight directive');
      // }
    };
  });
