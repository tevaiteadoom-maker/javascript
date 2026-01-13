class Player {
    constructor(id, pseudo, skinID, atk, cooldown, speed, hp, hps, position) {
        this.id = id;
        this.pseudo = pseudo;
        this.skinID = skinID;
        // position attendue : { x: number, y: number }
        this.position = position;
        this.atk = atk;
        this.cooldown = cooldown;
        this.speed = speed;
        this.hp = hp;
        this.hps = hps;

    }

    // Met à jour le joueur avec les données envoyées par le serveur
    update(data) {
        this.atk = data.atk;
        this.cooldown = data.cooldown;
        this.speed = data.speed;
        this.hp = data.hp;
        this.hps = data.hps;
        this.position = data.position;
    }

    animate() {
        //the player is walking
        if(this.iswalking){

            this.currentWalkSpriteStep++;
            if(this.currentWalkSpriteStep >= this.walkSpriteDuration){
                this.currentWalkSpriteStep = 0;
                this.walkSpriteIndex++;
            }
            this.walkSpriteIndex ++;
            if(this.walkSpriteIndex >= this.walkSpriteNumber){
                this.walkSpriteIndex = 0;
            }
        }
        //the player is attaking
        else if(this.isAttaking){

        }
        //the player is dying
        else if(this.Dying){

        }
        // idle
        else {

        }
        console.log("Walk Animation: \n");
        console.log("isWalking =  ", this.isWalking);
        console.log("walkSpriteIndex = ", this.walkSpriteIndex, "/", this.walkSpriteNumber);
        console.log("this.currentWalkSpiteStep = ", history.currentWalkSpriteStep, "/", this.walkSpriteDuration);
    }

}
tevaito = new Player(41, "tevaito", 1, [0,0]);

for (let i = 0; i < 10; i++){
    tevaito.animate();
}
