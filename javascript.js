/*Look at TODO list in README and TOP assignment for directions*/

/*Make variables for game*/
let playerChoice;
let playerScore=0;
let opponentScore=0;

/*Computer Play*/
function computerPlay(){
    let x;
    x=Math.floor(Math.random()*(3-1+1))+1;

    switch(x){
        case 1:
            return "Rock";
        break;
        case 2:
            return "Paper";
        break;
        case 3:
            return "Scissors";
        break;
        default:
            return "Option not chosen(bug)"
        
    }
}


/*Game Function */
function play(playerSelection, opponentSelection){
        console.log(playerSelection + " " + opponentSelection);
        /*Win Condition */
        if(playerSelection.toLowerCase() == "rock" && opponentSelection.toLowerCase()=="scissors" 
        || playerSelection.toLowerCase()==="scissors" && opponentSelection.toLowerCase()=="paper" || 
        playerSelection.toLowerCase()=="paper" && opponentSelection.toLowerCase()=="rock"){
            playerScore++;
            return "Player has won this round!!!";
        }
        /*Lose Condition */
        else if(playerSelection.toLowerCase() == "scissors" && opponentSelection.toLowerCase() =="rock" 
        || playerSelection.toLowerCase()=="paper" && opponentSelection.toLowerCase()=="scissors" || 
        playerSelection.toLowerCase()=="rock" && opponentSelection.toLowerCase()=="paper"){
            opponentScore++;
            return "Player has lost this round...";
        }
        /*Draw Condition */
        else if(playerSelection.toLowerCase() === opponentSelection.toLowerCase()){
            return "Player and opponent have reached a draw no point is given"
        }
}

console.log(play("ROCK", computerPlay()));

/*Game Function*/
function game(){
    /*For loop for 5 games*/
    for(x=0;x<=5;x++){
        
    }
}


