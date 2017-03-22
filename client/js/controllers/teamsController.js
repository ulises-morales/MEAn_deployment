myAppModule.controller('TeamsController', ['$scope', 'TeamFactory', function ($scope, TeamFactory) {
  $scope.teams = [];
  console.log($scope.teams);

  // receive all teams from factory
  TeamFactory.getTeams(function(teams){
    $scope.teams = teams;
  })
  console.log($scope.teams);

  // create new team
  $scope.addTeam = function () {
    TeamFactory.newTeam($scope.newTeam);
    console.log($scope.newTeam);
    $scope.newTeam = null;
    };

  //Pass team to TeamFactory to remove
   $scope.deleteTeam = function(team){
     TeamFactory.teamDelete(team)
     console.log(team);
   }
}]);
