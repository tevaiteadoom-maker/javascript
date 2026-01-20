class Game {
   constructor(){
      this.isRunning = false;
      this.isOver = false;

      this.timer = 0;

      this.players = {};
   }

   update(gameStateFromServer) {
        this.isRunning = gameStateFromServer.isRunning;
        this.isOver = gameStateFromServer.isOver;
        this.timer = gameStateFromServer.timer;

        for(let playerId in gameStateFromServer.players) {
            let backendPlayer = gameStateFromServer.players[playerId]
            //console.log(backendPlayer.position);
            if(!this.players[playerId]) {
                this.players[playerId] = new Player (
                    playerId,
                    backendPlayer.name,
                    backendPlayer.skinPath,
                    backendPlayer.position
                )
            } 
            this.players[playerId].update(backendPlayer)

        }


        for (let frontPlayerId in this.players) {
            if (!(frontPlayerId in gameStateFromServer.players)) {
                delete this.players[frontPlayerId];
            }
        }


   }

}
