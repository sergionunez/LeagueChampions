'use strict';

describe('Directive: champSpotlight', function () {

  // load the directive's module
  beforeEach(module('leagueChampionsApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<champ-spotlight></champ-spotlight>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the champSpotlight directive');
  }));
});
