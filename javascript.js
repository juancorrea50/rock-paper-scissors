/*Look at TODO list in README and TOP assignment for directions*/

/*Make variables for game*/
let playerScore=0;
let opponentScore=0;

/*Computer Play*/
function computerPlay(){
    return "Scissors"
}
console.log("Opponent has chosen "+computerPlay())

/*Game Function */
function play(playerSelection,opponentSelection){
        switch(playerSelection, opponentSelection){
            case playerSelection.toLowerCase() == "rock" && opponentSelection.toLowerCase() =="scissors" 
            || playerSelection.toLowerCase()=="scissors" && opponentSelection.toLowerCase()=="paper" || 
            playerSelection.toLowerCase()=="paper" && opponentSelection.toLowerCase()=="rock":
                playerScore++;
                return "Player has won this round!!!";
            break;
            case playerSelection.toLowerCase() == "scissors" && opponentSelection.toLowerCase() =="rock" 
            || playerSelection.toLowerCase()=="paper" && opponentSelection.toLowerCase()=="scissors" || 
            playerSelection.toLowerCase()=="rock" && opponentSelection.toLowerCase()=="paper":
                opponentScore++;
                return "Player has lost this round...";
            break;
            default:
                return "Player and opponent have reached a draw no point is given"
            
        }
}


/*For loop on win condition*/
for(x=0;x<5;x++){

}