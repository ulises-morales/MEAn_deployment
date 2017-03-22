myAppModule.factory("TeamFactory", function(){
  //Initialize our list of teams
  var teams = [
    {name:"Lakers"},
    {name:"Spurs"},
    {name:"Bulls"},
    {name:"Warriors"}
  ];

  var factory = {};

  //Pass the team list to a controller
  //  factory.getTeams = teams
   factory.getTeams = function(callback){
     callback(teams);
   }


   // add new team to the list
   factory.newTeam = function (team) {
     teams.push(team);
   }

   //Remove the team from the list
   factory.teamDelete = function (team){
      teams.splice(teams.indexOf(team),1);
   }

   return factory;
})
