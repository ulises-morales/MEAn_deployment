myAppModule.controller('AssociationsController', ['$scope', 'PlayerFactory', 'TeamFactory', function ($scope, PlayerFactory, TeamFactory){
  $scope.players = [];
  $scope.teams = [];

  // receive all players from factory
  PlayerFactory.getPlayers(function(players){
    $scope.players = players;
  })
  console.log($scope.players);

  // receive all teams from factory
  TeamFactory.getTeams(function(teams){
    $scope.teams = teams;
  })
  console.log($scope.teams);

  //Pass the player index and team name to create association
   $scope.addPlayerToTeam = function(){
      PlayerFactory.addPlayerToTeam($scope.newAssoc);
   }
  // console.log($scope.addPlayerToTeam);

  $scope.removePlayer = function (player, team) {
      TeamFactory.playerLeave(player, team)
  };
}]);
