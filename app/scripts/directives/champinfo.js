'use strict';

/**
 * @ngdoc directive
 * @name leagueChampionsApp.directive:champInfo
 * @description
 * # champInfo
 */
angular.module('leagueChampionsApp')
  .directive('champInfo', function () {
    return {
      templateUrl: '/views/directive/champ-info.html',
      restrict: 'E',
      scope: {
        name: '@name',
        title: '@title',
        version: '@version',
        key: '@key',
        info: '@info'
      },
      // link: function postLink(scope, element, attrs) {
      //   element.text('this is the champInfo directive');
      // }
    };
  });
