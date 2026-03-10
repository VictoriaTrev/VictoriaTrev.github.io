let player = 0;
let p1store = 0;

let gameover = false;

let endpit = null;

const array = [p1store = 0, p1pit1 = 4, p1pit2 = 4, p1pit3 = 4, p1pit4 = 4, p1pit5 = 4, p1pit6 = 4, 
    p2pit1 = 4, p2pit2 = 4, p2pit3 = 4, p2pit4 = 4, p2pit5 = 4, p2pit6 = 4, p2store = 0];

let store1 = document.getElementById("store1");
let store2 = document.getElementById("store2");

let pit1 = document.getElementById("pit1");
let pit2 = document.getElementById("pit2");
let pit3 = document.getElementById("pit3");
let pit4 = document.getElementById("pit4");
let pit5 = document.getElementById("pit5");
let pit6 = document.getElementById("pit6");
let pit7 = document.getElementById("pit7");
let pit8 = document.getElementById("pit8");
let pit9 = document.getElementById("pit9");
let pit10 = document.getElementById("pit10");
let pit11 = document.getElementById("pit11");
let pit12 = document.getElementById("pit12");

//rule pop-up
function rules(){
    document.getElementById("ruleopen").classList.toggle("show");
    console.log("rules");
}

//show restart button
function restart(){
    document.getElementById("restartbtn").classList.toggle("showrestart");
    location.reload();
}

//Updates the numbers on the board
function updateboard(){
    store1 = document.getElementById("store1");
    store2 = document.getElementById("store2");

    pit1 = document.getElementById("pit1");
    pit2 = document.getElementById("pit2");
    pit3 = document.getElementById("pit3");
    pit4 = document.getElementById("pit4");
    pit5 = document.getElementById("pit5");
    pit6 = document.getElementById("pit6");
    pit7 = document.getElementById("pit7");
    pit8 = document.getElementById("pit8");
    pit9 = document.getElementById("pit9");
    pit10 = document.getElementById("pit10");
    pit11 = document.getElementById("pit11");
    pit12 = document.getElementById("pit12");
}

//updates the seed counters
function updateseed(){
    store1.innerHTML = array[0];
    pit1.innerHTML = array[1];
    pit2.innerHTML = array[2];
    pit3.innerHTML = array[3];
    pit4.innerHTML = array[4];
    pit5.innerHTML = array[5];
    pit6.innerHTML = array[6];
    pit7.innerHTML = array[7];
    pit8.innerHTML = array[8];
    pit9.innerHTML = array[9];
    pit10.innerHTML = array[10];
    pit11.innerHTML = array[11];
    pit12.innerHTML = array[12];
    store2.innerHTML = array[13];

    endgame();
}

//Setup for game
function play(){
    updateboard();

    pit1.innerHTML = "4";
    pit2.innerHTML = "4";
    pit3.innerHTML = "4";
    pit4.innerHTML = "4";
    pit5.innerHTML = "4";
    pit6.innerHTML = "4";
    pit7.innerHTML = "4";
    pit8.innerHTML = "4";
    pit9.innerHTML = "4";
    pit10.innerHTML = "4";
    pit11.innerHTML = "4";
    pit12.innerHTML = "4";
    store1.innerHTML = "0";
    store2.innerHTML = "0";

    //removes the play button when clicked
    document.getElementById("playbtn").remove("play");
    player = 1;
    playerturn();

    return player;
}

//Correct Player Condition
function playerturn(){
    console.log(player);
    if(player == 1){
        document.getElementById("h1").innerHTML = "Player 1 Turn";
        board();
    }

    if(player == 2){
        document.getElementById("h1").innerHTML = "Player 2 Turn";
        board();
    }
}

function board(){
    //player color change
    if(player == 1){
        //player1 selected
        document.getElementById("p1select1").style.borderColor = "#AB4E68";
        document.getElementById("p1select2").style.borderColor = "#AB4E68";
        document.getElementById("p1select3").style.borderColor = "#AB4E68";
        document.getElementById("p1select4").style.borderColor = "#AB4E68";
        document.getElementById("p1select5").style.borderColor = "#AB4E68";
        document.getElementById("p1select6").style.borderColor = "#AB4E68";

        document.getElementById("s1select").style.borderColor = "#AB4E68";
        document.getElementById("s1select").style.backgroundColor = "#AB4E68";

        //player2 unselected
        document.getElementById("p2select1").style.borderColor = "#9e7159";
        document.getElementById("p2select2").style.borderColor = "#9e7159";
        document.getElementById("p2select3").style.borderColor = "#9e7159";
        document.getElementById("p2select4").style.borderColor = "#9e7159";
        document.getElementById("p2select5").style.borderColor = "#9e7159";
        document.getElementById("p2select6").style.borderColor = "#9e7159";

        document.getElementById("s2select").style.borderColor = "#9e7159";
        document.getElementById("s2select").style.backgroundColor = "#9e7159";
    }

    if(player == 2){
        //player2 selected
        document.getElementById("p2select1").style.borderColor = "#247BA0";
        document.getElementById("p2select2").style.borderColor = "#247BA0";
        document.getElementById("p2select3").style.borderColor = "#247BA0";
        document.getElementById("p2select4").style.borderColor = "#247BA0";
        document.getElementById("p2select5").style.borderColor = "#247BA0";
        document.getElementById("p2select6").style.borderColor = "#247BA0";

        document.getElementById("s2select").style.borderColor = "#247BA0";
        document.getElementById("s2select").style.backgroundColor = "#247BA0";

        //player1 unselected
        document.getElementById("p1select1").style.borderColor = "#9e7159";
        document.getElementById("p1select2").style.borderColor = "#9e7159";
        document.getElementById("p1select3").style.borderColor = "#9e7159";
        document.getElementById("p1select4").style.borderColor = "#9e7159";
        document.getElementById("p1select5").style.borderColor = "#9e7159";
        document.getElementById("p1select6").style.borderColor = "#9e7159";

        document.getElementById("s1select").style.borderColor = "#9e7159";
        document.getElementById("s1select").style.backgroundColor = "#9e7159";
    }
}





// Seed Moving Functions Player 1
function p1move1(){
    if(player == 1){
        updateboard();

        let apit1 = [0, 7, 8, 9, 10, 11, 12, 6, 5, 4, 3, 2, 1];
        let seeds = array[1];
        array[1] = 0;
        let i = 0;

        if(seeds == 0){
            alert("Cannot select this pit! There are no seeds to gather :( Choose a different pit!");
            return;
        }

        while(seeds > 0){
            array[apit1[i]] += 1;
            endpit = apit1[i];
            seeds -= 1;

            i++;
            if(i >= apit1.length){
                i = 0;
            }
        }

        updateseed();

        if(gameover){
            return;
        }

        if(endpit == 0){
            document.getElementById("h1").innerHTML = "Player 1 gets bonus turn!";
            return;
        }

        player = 2;
        playerturn();
    }  
}

function p1move2(){
    if(player == 1){
        updateboard();

        let apit1 = [1, 0, 7, 8, 9, 10, 11, 12, 6, 5, 4, 3, 2];
        let seeds = array[2];
        array[2] = 0;
        let i = 0;

        if(seeds == 0){
            alert("Cannot select this pit! There are no seeds to gather :( Choose a different pit!");
            return;
        }

        while(seeds > 0){
            array[apit1[i]] += 1;
            endpit = apit1[i];
            seeds -= 1;

            i++;
            if(i >= apit1.length){
                i = 0;
            }
        }

        updateseed();

        if(gameover){
            return;
        }

        if(endpit == 0){
            document.getElementById("h1").innerHTML = "Player 1 gets bonus turn!";
            return;
        }

        player = 2;
        playerturn();
    }
}

function p1move3(){
    if(player == 1){
        updateboard();

        let apit1 = [2, 1, 0, 7, 8, 9, 10, 11, 12, 6, 5, 4, 3];
        let seeds = array[3];
        array[3] = 0;
        let i = 0;

        if(seeds == 0){
            alert("Cannot select this pit! There are no seeds to gather :( Choose a different pit!");
            return;
        }

        while(seeds > 0){
            array[apit1[i]] += 1;
            endpit = apit1[i];
            seeds -= 1;

            i++;
            if(i >= apit1.length){
                i = 0;
            }
        }

        updateseed();

        if(gameover){
            return;
        }

        if(endpit == 0){
            document.getElementById("h1").innerHTML = "Player 1 gets bonus turn!";
            return;
        }

        player = 2;
        playerturn();
    }
}

function p1move4(){
    if(player == 1){
        updateboard();

        let apit1 = [3, 2, 1, 0, 7, 8, 9, 10, 11, 12, 6, 5, 4];
        let seeds = array[4];
        array[4] = 0;
        let i = 0;

        if(seeds == 0){
            alert("Cannot select this pit! There are no seeds to gather :( Choose a different pit!");
            return;
        }

        while(seeds > 0){
            array[apit1[i]] += 1;
            endpit = apit1[i];
            seeds -= 1;

            i++;
            if(i >= apit1.length){
                i = 0;
            }
        }

        updateseed();

        if(gameover){
            return;
        }

        if(endpit == 0){
            document.getElementById("h1").innerHTML = "Player 1 gets bonus turn!";
            return;
        }

        player = 2;
        playerturn();
    }
}

function p1move5(){
    if(player == 1){
        updateboard();

        let apit1 = [4, 3, 2, 1, 0, 7, 8, 9, 10, 11, 12, 6, 5];
        let seeds = array[5];
        array[5] = 0;
        let i = 0;

        if(seeds == 0){
            alert("Cannot select this pit! There are no seeds to gather :( Choose a different pit!");
            return;
        }

        while(seeds > 0){
            array[apit1[i]] += 1;
            endpit = apit1[i];
            seeds -= 1;

            i++;
            if(i >= apit1.length){
                i = 0;
            }
        }

        updateseed();

        if(gameover){
            return;
        }

        if(endpit == 0){
            document.getElementById("h1").innerHTML = "Player 1 gets bonus turn!";
            return;
        }

        player = 2;
        playerturn();
    }
}

function p1move6(){
    if(player == 1){
        updateboard();

        let apit1 = [5, 4, 3, 2, 1, 0, 7, 8, 9, 10, 11, 12, 6];
        let seeds = array[6];
        array[6] = 0;
        let i = 0;

        if(seeds == 0){
            alert("Cannot select this pit! There are no seeds to gather :( Choose a different pit!");
            return;
        }

        while(seeds > 0){
            array[apit1[i]] += 1;
            endpit = apit1[i];
            seeds -= 1;

            i++;
            if(i >= apit1.length){
                i = 0;
            }
        }

        updateseed();

        if(gameover){
            return;
        }

        if(endpit == 0){
            document.getElementById("h1").innerHTML = "Player 1 gets bonus turn!";
            return;
        }

        player = 2;
        playerturn();
    }
}




// Seed Moving Functions Player 2
function p2move1(){
    if(player == 2){
        updateboard();

        let apit2 = [8, 9, 10, 11, 12, 13, 6, 5, 4, 3, 2, 1, 7];
        let seeds = array[7];
        array[7] = 0;
        let i = 0;

        if(seeds == 0){
            alert("Cannot select this pit! There are no seeds to gather :( Choose a different pit!");
            return;
        }

        while(seeds > 0){
            array[apit2[i]] += 1;
            endpit = apit2[i];
            seeds -= 1;

            i++;
            if(i >= apit2.length){
                i = 0;
            }
        }

        updateseed();

        if(gameover){
            return;
        }

        if(endpit == 0){
            document.getElementById("h1").innerHTML = "Player 2 gets bonus turn!";
            return;
        }

        player = 1;
        playerturn();
    }
}

function p2move2(){
    if(player == 2){
        updateboard();

        let apit2 = [9, 10, 11, 12, 13, 6, 5, 4, 3, 2, 1, 8];
        let seeds = array[8];
        array[8] = 0;
        let i = 0;

        if(seeds == 0){
            alert("Cannot select this pit! There are no seeds to gather :( Choose a different pit!");
            return;
        }

        while(seeds > 0){
            array[apit2[i]] += 1;
            endpit = apit2[i];
            seeds -= 1;

            i++;
            if(i >= apit2.length){
                i = 0;
            }
        }

        updateseed();

        if(gameover){
            return;
        }

        if(endpit == 0){
            document.getElementById("h1").innerHTML = "Player 2 gets bonus turn!";
            return;
        }

        player = 1;
        playerturn();
    }
}

function p2move3(){
    if(player == 2){
        updateboard();

        let apit2 = [10, 11, 12, 13, 6, 5, 4, 3, 2, 1, 8, 9];
        let seeds = array[9];
        array[9] = 0;
        let i = 0;

        if(seeds == 0){
            alert("Cannot select this pit! There are no seeds to gather :( Choose a different pit!");
            return;
        }

        while(seeds > 0){
            array[apit2[i]] += 1;
            endpit = apit2[i];
            seeds -= 1;

            i++;
            if(i >= apit2.length){
                i = 0;
            }
        }

        updateseed();

        if(gameover){
            return;
        }

        if(endpit == 0){
            document.getElementById("h1").innerHTML = "Player 2 gets bonus turn!";
            return;
        }

        player = 1;
        playerturn();
    }
}

function p2move4(){
    if(player == 2){
        updateboard();

        let apit2 = [11, 12, 13, 6, 5, 4, 3, 2, 1, 8, 9, 10];
        let seeds = array[10];
        array[10] = 0;
        let i = 0;

        if(seeds == 0){
            alert("Cannot select this pit! There are no seeds to gather :( Choose a different pit!");
            return;
        }

        while(seeds > 0){
            array[apit2[i]] += 1;
            endpit = apit2[i];
            seeds -= 1;

            i++;
            if(i >= apit2.length){
                i = 0;
            }
        }

        updateseed();

        if(gameover){
            return;
        }

        if(endpit == 0){
            document.getElementById("h1").innerHTML = "Player 2 gets bonus turn!";
            return;
        }

        player = 1;
        playerturn();
    }
}

function p2move5(){
    if(player == 2){
        updateboard();

        let apit2 = [12, 13, 6, 5, 4, 3, 2, 1, 8, 9, 10, 11];
        let seeds = array[11];
        array[11] = 0;
        let i = 0;

        if(seeds == 0){
            alert("Cannot select this pit! There are no seeds to gather :( Choose a different pit!");
            return;
        }

        while(seeds > 0){
            array[apit2[i]] += 1;
            endpit = apit2[i];
            seeds -= 1;

            i++;
            if(i >= apit2.length){
                i = 0;
            }
        }

        updateseed();

        if(gameover){
            return;
        }

        if(endpit == 0){
            document.getElementById("h1").innerHTML = "Player 2 gets bonus turn!";
            return;
        }

        player = 1;
        playerturn();
    }
}

function p2move6(){
    if(player == 2){
        updateboard();

        let apit2 = [13, 6, 5, 4, 3, 2, 1, 8, 9, 10, 11, 12];
        let seeds = array[12];
        array[12] = 0;
        let i = 0;

        if(seeds == 0){
            alert("Cannot select this pit! There are no seeds to gather :( Choose a different pit!");
            return;
        }

        while(seeds > 0){
            array[apit2[i]] += 1;
            endpit = apit2[i];
            seeds -= 1;

            i++;
            if(i >= apit2.length){
                i = 0;
            }
        }

        updateseed();

        if(gameover){
            return;
        }

        if(endpit == 0){
            document.getElementById("h1").innerHTML = "Player 2 gets bonus turn!";
            return;
        }

        player = 1;
        playerturn();
    }
}


function endgame(){
    console.log("check endgame");
    if(array[1] == 0 && array[2] == 0 && array[3] == 0 && array[4] == 0 && array[5] == 0 && array[6] == 0 || 
        array[7] == 0 && array[8] == 0 && array[9] == 0 && array[10] == 0 && array[11] == 0 && array[12] == 0){

            gameover = true;

            if (array[0] > array [13]){
                document.getElementById("h1").innerHTML = " Game Over Player 1 Wins!!"
                document.getElementById("h1").classList.add("spin");
                document.getElementById("h1").style.backgroundColor = "#AB4E68";

                document.getElementById("game").remove("board");

                document.getElementById("wingif").innerHTML = `<img src = "yippee.gif" width = "300px">`;

            }

            else if (array[0] < array [13]){
                document.getElementById("h1").innerHTML = " Game Over Player 2 Wins!!"
                document.getElementById("h1").classList.add("spin");
                document.getElementById("h1").style.backgroundColor = "#247BA0";

                document.getElementById("game").remove("board");

                document.getElementById("wingif").innerHTML = `<img src = "daningcat.gif" width = "300px">`;
            }
            else{
                document.getElementById("h1").innerHTML = "Game Over Its a Tie!!"
                document.getElementById("game").remove("board");
            }
    }
}





//Hover pit element
function p1over1(){
    if (player == 1){
        document.getElementById("p1select1").style.borderColor = "#B81365";
    }
}

function p1over2(){
    if (player == 1){
        document.getElementById("p1select2").style.borderColor = "#B81365";
    }
}

function p1over3(){
    if (player == 1){
        document.getElementById("p1select3").style.borderColor = "#B81365";
    }
}

function p1over4(){
    if (player == 1){
        document.getElementById("p1select4").style.borderColor = "#B81365";
    }
}

function p1over5(){
    if (player == 1){
        document.getElementById("p1select5").style.borderColor = "#B81365";
    }
}

function p1over6(){
    if (player == 1){
        document.getElementById("p1select6").style.borderColor = "#B81365";
    }
}


function p2over1(){
    if (player == 2){
        document.getElementById("p2select1").style.borderColor = "#00AFB5";
    }
}

function p2over2(){
    if (player == 2){
        document.getElementById("p2select2").style.borderColor = "#00AFB5";
    }
}

function p2over3(){
    if (player == 2){
        document.getElementById("p2select3").style.borderColor = "#00AFB5";
    }
}

function p2over4(){
    if (player == 2){
        document.getElementById("p2select4").style.borderColor = "#00AFB5";
    }
}

function p2over5(){
    if (player == 2){
        document.getElementById("p2select5").style.borderColor = "#00AFB5";
    }
}

function p2over6(){
    if (player == 2){
        document.getElementById("p2select6").style.borderColor = "#00AFB5";
    }
}



function p1out1(){
    if (player == 1){
        document.getElementById("p1select1").style.borderColor = "#AB4E68";
    }
}

function p1out2(){
    if (player == 1){
        document.getElementById("p1select2").style.borderColor = "#AB4E68";
    }
}

function p1out3(){
    if (player == 1){
        document.getElementById("p1select3").style.borderColor = "#AB4E68";
    }
}

function p1out4(){
    if (player == 1){
        document.getElementById("p1select4").style.borderColor = "#AB4E68";
    }
}

function p1out5(){
    if (player == 1){
        document.getElementById("p1select5").style.borderColor = "#AB4E68";
    }
}

function p1out6(){
    if (player == 1){
        document.getElementById("p1select6").style.borderColor = "#AB4E68";
    }
}


function p2out1(){
    if (player == 2){
        document.getElementById("p2select1").style.borderColor = "#247BA0";
    }
}

function p2out2(){
    if (player == 2){
        document.getElementById("p2select2").style.borderColor = "#247BA0";
    }
}

function p2out3(){
    if (player == 2){
        document.getElementById("p2select3").style.borderColor = "#247BA0";
    }
}

function p2out4(){
    if (player == 2){
        document.getElementById("p2select4").style.borderColor = "#247BA0";
    }
}

function p2out5(){
    if (player == 2){
        document.getElementById("p2select5").style.borderColor = "#247BA0";
    }
}

function p2out6(){
    if (player == 2){
        document.getElementById("p2select6").style.borderColor = "#247BA0";
    }
}




/* Animations */
function seedanimation(x, y){
    document.getElementById("seedanimation").style.setProperty("--x", x + "px");
    document.getElementById("seedanimation").style.setProperty("--y", y + "px");

    setTimeout(function(){
        document.getElementById("seedanimation").style.setProperty("--x", "0px");
        document.getElementById("seedanimation").style.setProperty("--y", "0px");
    }, 500);
}