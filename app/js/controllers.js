angular.module('SavageWorldsCharacterSheetApp.controllers', []).

  /* Characters controller */
  controller('charactersController', function($scope, characterAPIservice) {
    $scope.nameFilter = null;
    $scope.charactersList = //[];
      [
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
      ];

    $scope.searchFilter = function (character) {
        var re = new RegExp($scope.nameFilter, 'i');
        return !$scope.nameFilter || re.test(character.name) || re.test(character.name);
    };

//    characterAPIservice.getCharacters().success(function (response) {
        //Digging into the response to get the relevant data
//        $scope.charactersList = response.CharacterData.Characters;
//    });
  }).

  /* Character controller */
  controller('characterController', function($scope, $routeParams, characterAPIservice) {
    $scope.id = $routeParams.id;
    $scope.character = //null;
        {
          id: 1,
          name: "Thorsen",
          profession: "Warrior",
          setting: "Winter Eternal",
          quote: "I'll check for traps! Ooof!!",
          experience:
            {
              level: "Seasoned",
              points: 25
            },
          attributes:
            {
              agility: "d4",
              smarts: "d6",
              spirit: "d8",
              strength: "d10",
              vigor: "d12",
              charisma: 0,
              pace: 6,
              parry: 4,
              toughness: 6,
            },
          health:
            {
              wounds: 1,
              fatigue: 2,
              incap: 0,
              injuries:
              [
                {
                  name: "left limp"
                },
                {
                  name: "no right pinky"
                }
              ]
            },
          skills:
            [
              {
                name: "Fighting",
                rank: "d8"
              },
              {
                name: "Untrained",
                rank: "d4-2"
              }
            ],
          hindrances:
            [
              {
                name: "Quirk",
                severity: "Minor" 
              }
            ],
          edges:
            [
              {
                name: "Quick"
              },
              {
                name: "Lucky"
              }
            ],
          armor:
            {
              head: 0,
              torso: 1,
              arms: 0,
              legs: 0
            },
          encumbrance:
            {
              totalWeight: 35,
              weightLimit: 100,
              penalty: 0
            },
          equipment:
            [
              {
                name: "chainmail",
                weight: 28
              },
              {
                name: "broadsword",
                weight: 7
              }
            ],
          powers:
            [
              {
                name: "bolt",
                cost: 1,
                range: 5,
                effect: "2d6",
                duration: 1
              }
            ],
          weapons:
            [
              {
                name: "broadsword",
                range: 1,
                rof: 1,
                damage: "1d6+1d6",
                ap: 0,
                weight: 7,
                notes: "none"
              }
            ]
        };

//    characterAPIservice.getCharacterDetails($scope.id).success(function (response) {
//        $scope.character = response.CharacterData.Characters[0].Character; 
//    });
  });