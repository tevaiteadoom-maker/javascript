class GameController { 

    constructor() {
        this.game = new Game()
        // Server sends updates at 20 ticks per second
        this.SERVER_TICK_RATE = 20;
        // Duration between two server ticks in milliseconds
        this.SERVER_INTERVAL = 1000 / this.SERVER_TICK_RATE;

        // Permanently bind "this" at the instance of the GameController class
        this.loop = this.loop.bind(this);

        // Regulates framerate to keep 60fps
        requestAnimationFrame(this.loop);;
        const jsArenaPlayer = JSON.parse(localStorage.getItem("jsArenaPlayer"));
        this.pseudo = jsArenaPlayer.pseudo;
        this.serverUrl = jsArenaPlayer.serverUrl;
        this.skinPath = jsArenaPlayer.skinPath;
        this.inputs = {
            up: false,
            down: false,
            left: false,
            right: false,
            attack: false
        };
        this.socket = new WebSocket(this.serverUrl);
        this.initInput();
        this.initSocket();
        this.startInputSender();

    }
    initSocket(){
        this.socket.onopen = () => {
            console.log("Connected to server");

            this.socket.send(JSON.stringify({
                name : this.pseudo,
                skinPath : this.skinPath
            }));
        };
        this.socket.onmessage = (event) => {
            const snapshot = JSON.parse(event.data);
            this.game.state = snapshot;
        }
    }
    initInput() {

    // Touche pressée
    window.addEventListener("keydown", (event) => {
        switch (event.key) {
            case "z":
            case "ArrowUp":
                this.inputs.up = true;
                break;

            case "s":
            case "ArrowDown":
                this.inputs.down = true;
                break;

            case "q":
            case "ArrowLeft":
                this.inputs.left = true;
                break;

            case "d":
            case "ArrowRight":
                this.inputs.right = true;
                break;

            case " ":
                this.inputs.attack = true;
                break;
        }
        console.log(this.inputs);
    });

    // Touche relâchée
    window.addEventListener("keyup", (event) => {
        switch (event.key) {
            case "z":
            case "ArrowUp":
                this.inputs.up = false;
                break;

            case "s":
            case "ArrowDown":
                this.inputs.down = false;
                break;

            case "q":
            case "ArrowLeft":
                this.inputs.left = false;
                break;

            case "d":
            case "ArrowRight":
                this.inputs.right = false;
                break;

            case " ":
                this.inputs.attack = false;
                break;
        }
        console.log(this.inputs)
    });

     // ===== Souris =====
    window.addEventListener("mousedown", (event) => {
        if (event.button === 0) { // 0 = clic gauche
            this.inputs.attack = true;
        }
        console.log(this.inputs)
    });

    window.addEventListener("mouseup", (event) => {
        if (event.button === 0) {
            this.inputs.attack = false;
        }
        console.log(this.inputs)
    });

    // Empêche le menu contextuel par défaut au clic droit
    window.addEventListener("contextmenu", (event) => {
        event.preventDefault();
    });

}
startInputSender() {
        setInterval(() => {
            if (this.socket.readyState !== WebSocket.OPEN) return;

            const message = {
                type: "input",
                input: this.inputState
            };

            this.socket.send(JSON.stringify(message));
        }, this.SERVER_INTERVAL);

}




    // === Main render loop ===
    loop(timestamp) {
        // Affichage des informations de l'état du jeu
        console.group("État du jeu");
        console.log("Chronomètre:", this.game.timer);
        console.log("Jeu en cours:", this.game.isRunning);
        console.log("Jeu terminé:", this.game.isOver);
        console.log("Joueurs:", this.game.players);
        console.groupEnd();

        // Request the next frame
        requestAnimationFrame(this.loop);
    }
}
// === Start the game controller by instantiating the GameController class ===
// This line will execute the constructor (e.g, launch the frontend)
const myGame = new GameController();

console.log(myGame.pseudo);     // aito
console.log(myGame.serverUrl);  // azere
console.log(myGame.skinPath);   // assets/6.png
