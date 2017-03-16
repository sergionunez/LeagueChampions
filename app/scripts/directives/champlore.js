'use strict';

/**
 * @ngdoc directive
 * @name leagueChampionsApp.directive:champLore
 * @description
 * # champLore
 */
angular.module('leagueChampionsApp')
  .directive('champLore', function () {
    return {
      templateUrl: '/views/directive/champ-lore.html',
      restrict: 'E',
      scope: {
        lore: '@lore'
      },
      // link: function postLink(scope, element, attrs) {
      //   element.text('this is the champLore directive');
      // }
    };
  });
