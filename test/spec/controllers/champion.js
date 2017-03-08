'use strict';

describe('Controller: ChampionCtrl', function () {

  // load the controller's module
  beforeEach(module('leagueChampionsApp'));

  var ChampionCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ChampionCtrl = $controller('ChampionCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ChampionCtrl.awesomeThings.length).toBe(3);
  });
});
