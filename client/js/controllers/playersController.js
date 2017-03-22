myAppModule.controller('PlayersController', ['$scope', 'PlayerFactory', function ($scope, PlayerFactory) {
  $scope.players = [];
  console.log($scope.players);

  // receive all players from factory
  PlayerFactory.getPlayers(function(players){
    $scope.players = players;
  })
  console.log($scope.players);

  // create new player
  $scope.addPlayer = function () {
    PlayerFactory.newPlayer($scope.newPlayer);
    console.log($scope.newPlayer);
    $scope.newPlayer = null;
    };

  //Pass player to PlayerFactory to remove
   $scope.deletePlayer = function(player){
     PlayerFactory.playerDelete(player)
     console.log(player);
   }
}]);
