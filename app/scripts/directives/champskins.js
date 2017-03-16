'use strict';

/**
 * @ngdoc directive
 * @name leagueChampionsApp.directive:champSkins
 * @description
 * # champSkins
 */
angular.module('leagueChampionsApp')
  .directive('champSkins', function () {
    return {
      templateUrl: '/views/directive/champ-skins.html',
      restrict: 'E',
      scope: {
        key: '@key',
        skins: '='
      },
      // link: function postLink(scope, element, attrs) {
      //   element.text('this is the champSkins directive');
      // }
    };
  });
