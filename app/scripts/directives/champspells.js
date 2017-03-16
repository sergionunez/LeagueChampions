'use strict';

/**
 * @ngdoc directive
 * @name leagueChampionsApp.directive:champSpells
 * @description
 * # champSpells
 */
angular.module('leagueChampionsApp')
  .directive('champSpells', function () {
    return {
      templateUrl: '/views/directive/champ-spells.html',
      restrict: 'E',
      scope: {
        name: '@name',
        version: '@version',
        passive: '=',
        spells: '='
      },
      // link: function postLink(scope, element, attrs) {
      //   element.text('this is the champSpells directive');
      // }
    };
  });
