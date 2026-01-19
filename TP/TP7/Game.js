// Exemple de message recu par le backend, à utiliser pour vos tests :
const backendData = {
   "isRunning":true,
   "isOver":false,
   "timer":190.6000000000091,
   "players":{
      "3cd71bbb-6a6b-4d4e-80e3-107130328a27":{
         "name":"blabla",
         "skinPath":"./spritesheets/3.png",
         "position":[
            0.5600000000000003,
            0.17999999999999977
         ],
         "lvl":1,
         "hp":100,
         "maxHp":100,
         "hpRegenRate":10,
         "speed":0.2,
         "direction":3,
         "isAttacking":false,
         "isWalking":false,
         "isDying":false,
         "attackCooldown":1,
         "currentAttackCooldown":0
      },
      "28ead291-fcea-4b41-a596-d3c876c49a53":{
         "name":"bloublou",
         "skinPath":"./spritesheets/4.png",
         "position":[
            0.44,
            0.19
         ],
         "lvl":1,
         "hp":100,
         "maxHp":100,
         "hpRegenRate":10,
         "speed":0.2,
         "direction":0,
         "isAttacking":false,
         "isWalking":false,
         "isDying":false,
         "attackCooldown":1,
         "currentAttackCooldown":0
      }
   }
};

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
const game = new Game();
//let player1 = new Player("rygyhfrefuh", "fidel", "./spritesheets/3.png", [ 0.503, 0.1977]);

console.log("TEST 1 : ajout des joueurs initiaux");

game.update(backendData);

console.log("Players après update initial :", game.players);
//console.log("Nombre de joueurs :", Object.keys(game.players).length);

backendData.players["NEW_PLAYER_ID"] = {
    name: "nouveau",
    skinPath: "./spritesheets/5.png",
    position: [0.2, 0.3],
    lvl: 1,
    hp: 100,
    maxHp: 100,
    hpRegenRate: 10,
    speed: 0.2,
    direction: 1,
    isAttacking: false,
    isWalking: true,
    isDying: false,
    attackCooldown: 1,
    currentAttackCooldown: 0
};

game.update(backendData);

console.log("Players après ajout :", game.players);
console.log("Nombre de joueurs :", Object.keys(game.players).length);

console.log("TEST 3 : mise à jour des stats d'un joueur");

backendData.players["NEW_PLAYER_ID"].hp = 60;
backendData.players["NEW_PLAYER_ID"].position = [0.5, 0.6];
backendData.players["NEW_PLAYER_ID"].isAttacking = true;

game.update(backendData);
console.log(
    "Stats joueur NEW_PLAYER_ID :",
    game.players["NEW_PLAYER_ID"]
);

console.log("TEST 4 : update des métadonnées de la partie");

backendData.isRunning = false;
backendData.timer = 250;

game.update(backendData);

console.log("isRunning :", game.isRunning);
console.log("timer :", game.timer);

console.log("TEST 5 : suppression d'un joueur");

delete backendData.players["3cd71bbb-6a6b-4d4e-80e3-107130328a27"];

game.update(backendData);

console.log("Players après suppression :", game.players);
console.log("Nombre de joueurs :", Object.keys(game.players).length);