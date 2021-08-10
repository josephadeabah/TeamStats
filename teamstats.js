
const team = {
    _players:[
     {firstName: 'Pablo', lastName: 'Sanchez', age: 25},
     {firstName: 'Christiano',lastName: 'Ronaldo',age: 32},
     {firstName: 'Asamoah', lastName: 'Gyan', age: 30}
  ],
    _games: [
  {opponent: 'Broncos', teamPoints: 42, opponentPoints: 27},
  {opponent: 'Chelsea', teamPoints: 25, opponentPoints: 32},
  {opponent: 'Real Madrid', teamPoints: 12, opponentPoints: 44}
  ],
  get players(){
    const teamPlayers = (this._players && Array.isArray(this._players))
                        ?this._players
                        :'ERROR: The player does not exit or type of player is not array'
    return teamPlayers;
  },
  get games(){
    const teamGames = (this._games && Array.isArray(this._games))
                      ? this._games
                      : 'ERROR: The games does not exit or type of game is not array'
    return teamGames;
  },
  addPlayer(firstName, lastName, age){
  this._players.push({firstName, lastName, age})
  }, 
  addGame(opponent, teamPoints, opponentPoints){
  this._games.push({opponent, teamPoints, opponentPoints}); 
  }
  };
  team.addPlayer('Steph', 'Curry', 28);
  team.addPlayer('Lisa', 'Leslie', 44);
  team.addPlayer('Bugs', 'Bunny', 76);

  team.addGame('Bacelona', 30, 40);
  team.addGame('Totteham', 50, 60);
  team.addGame('Liverpool', 25, 40);
  
  console.log(team.players);
  console.log(team.games);