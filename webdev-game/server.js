const express = require ("express");
const socket = require ("socket.io");
const app = express();
const port = 3000;

app.use(express.static("game"));

app.get

server = app.listen(port, () =>{
    console.log("Server is listening on port: " + port);
});

const io = socket(server);

let startingPlayer = null;
let playerTurn = 1;
let array = [0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0];
let path;

io.on("connection", (socket) =>{
    console.log("Browser Connected:", socket.id);

    if(!startingPlayer){
        startingPlayer = socket;
        socket.player = 1;
        socket.emit("playerType", 1);
    }
    else{
        socket.player = 2;
        socket.emit("playerType", 2);
        startingPlayer = null;
    }

    socket.on("playGame", () =>{
        io.emit("start");
    });

    socket.on("pitSelected", (pitNum) =>{
        if(socket.player != playerTurn){
            return;
        }

        console.log(socket.player + " has clicked pit: " + pitNum);

        let seeds = array[pitNum];
        if(seeds === 0){
            return;
        }

        array[pitNum] = 0;

        let i = pitNum;

        if (socket.player === 1){
            path = [6, 5, 4, 3, 2, 1, 0, 7, 8, 9, 10, 11, 12];
        }
        else{
            path = [7, 8, 9, 10, 11, 12, 13, 6, 5, 4, 3, 2, 1]
        }

        let index = path.indexOf(pitNum);

        while (seeds > 0){
            index = (index + 1) % path.length;
            
            let nextPit = path[index];

            array[nextPit]++;
            seeds--;
        }

        if((socket.player == 1 && i == 0) || (socket.player == 2 && i == 13)){

        }
        else{
            if(playerTurn == 1){
                playerTurn = 2;
            }
            else{
                playerTurn = 1;
            }

        }

        if(gameOver(array)){
            io.emit("gameOver", array);
            return;
        }

        io.emit("updateBoard", {array, playerTurn});
    });

});

function gameOver(array){
    if(array[1] == 0 && array[2] == 0 && array[3] == 0 && array[4] == 0 && array[5] == 0 && array[6] == 0 || 
        array[7] == 0 && array[8] == 0 && array[9] == 0 && array[10] == 0 && array[11] == 0 && array[12] == 0){
            return true;
        }
    else{
        return false;
    }
}
