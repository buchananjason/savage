angular.module('SavageWorldsCharacterSheetApp', [
  'SavageWorldsCharacterSheetApp.services',
  'SavageWorldsCharacterSheetApp.controllers',
  'ngRoute'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.
	when("/characters", {templateUrl: "views/characters.html", controller: "charactersController"}).
	when("/characters/:id", {templateUrl: "views/character.html", controller: "characterController"}).
	otherwise({redirectTo: '/characters'});
}]);