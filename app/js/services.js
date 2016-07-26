angular.module('SavageWorldsCharacterSheetApp.services', [])
  .factory('characterAPIservice', function($http) {

    var charactertAPI = {};

    charactertAPI.getCharacters = function() {
      return {
        CharacterData: {
          Characters: [
            {
              id: 1,
              name: "Thorsen",
              level: "Seasoned",
              parry: 4,
              toughness: 6
            },
            {
              id: 2,
              name: "Cthulhu",
              level: "Legendary",
              parry: 12,
              toughness: 24
            }
          ]
        }
      };
    }

    charactertAPI.getCharacterDetails = function(id) {
      return $http({
        method: 'JSONP', 
        url: 'http://ergast.com/api/f1/2016/drivers/'+ id +'/driverStandings.json?callback=JSON_CALLBACK'
      });
    }

    return charactertAPI;
  });