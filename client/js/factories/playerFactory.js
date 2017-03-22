//
myAppModule.factory("PlayerFactory", function(){
  //Initialize our list of players
  var players = [
    {name:"Speros"},
    {name:"Jimmy"},
    {name:"Jay"},
    {name:"Kris"}
  ];

  var factory = {};

  //Pass the player list to a controller
  //  factory.getPlayers = players
   factory.getPlayers = function(callback){
     callback(players);
   }


   // add new player to the list
   factory.newPlayer = function (player) {
     players.push(player);
   }

   //Remove the player from the list
   factory.playerDelete = function (player){
      players.splice(players.indexOf(player),1);
   }

   return factory;
})
