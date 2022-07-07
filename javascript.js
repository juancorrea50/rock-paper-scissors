/*Look at TODO list in README and TOP assignment for directions*/

/*js querySelectors */
const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");
const resultDiv = document.querySelector(".results")
const opponentScoreElement = document.querySelector('.opponent-score');
const playerScoreElement = document.querySelector('.player-score');








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





/*Game Logic */
function play(playerSelection, opponentSelection){
        
        
        console.log("Player selected " +playerSelection + " Opponent has selected " + opponentSelection);
        /*Win Condition */
        if(playerSelection.toLowerCase() == "rock" && opponentSelection.toLowerCase()=="scissors" 
        || playerSelection.toLowerCase()==="scissors" && opponentSelection.toLowerCase()=="paper" || 
        playerSelection.toLowerCase()=="paper" && opponentSelection.toLowerCase()=="rock"){
            const p = document.createElement('p');
            
            p.innerText = "Player has won this round!!!";
            resultDiv.appendChild(p);
            playerScore++;
        }
        /*Lose Condition */
        else if(playerSelection.toLowerCase() == "scissors" && opponentSelection.toLowerCase() =="rock" 
        || playerSelection.toLowerCase()=="paper" && opponentSelection.toLowerCase()=="scissors" || 
        playerSelection.toLowerCase()=="rock" && opponentSelection.toLowerCase()=="paper"){
            const p = document.createElement('p');

            p.innerText = "Player has lost this round...";
            resultDiv.appendChild(p);
            
            opponentScore++;
        }
        /*Draw Condition */
        else if(playerSelection.toLowerCase() === opponentSelection.toLowerCase()){
            const p = document.createElement('p');

            p.innerText = "Player and opponent have reached a draw no point is given" 
            resultDiv.appendChild(p);
        }
}

function checkForWinner(playerScore, opponentScore){
    if(playerScore === 5) {
        const h2 = document.createElement('h2');
        h2.innerText = "You won!!!";
        resultDiv.appendChild(h2);

    } else if(opponentScore ===5){
        const h2 = document.createElement('h2');
        h2.innerText = "You've lost...";
        resultDiv.appendChild(h2);
    }


}

rockButton.addEventListener('click', () => {
    const computerSelection = computerPlay();
    const playerSelection = 'rock';
    play(playerSelection, computerSelection);
    
    playerScoreElement.innerText = playerScore;
    opponentScoreElement.innerText = opponentScore;

    checkForWinner(playerScore,opponentScore);
});

paperButton.addEventListener('click', () => {
    const computerSelection = computerPlay();
    const playerSelection = 'paper';
    play(playerSelection, computerSelection);
    playerScoreElement.innerText = playerScore;
    opponentScoreElement.innerText = opponentScore;

    checkForWinner(playerScore,opponentScore);
});

scissorsButton.addEventListener('click', () => {
    const computerSelection = computerPlay();
    const playerSelection = 'scissors';
    play(playerSelection, computerSelection);
    playerScoreElement.innerText = playerScore;
    opponentScoreElement.innerText = opponentScore;

    checkForWinner(playerScore,opponentScore);
});














//OLD CODE
/*Game Function*/
//function game(){
    /*For loop for 5 games*/
    /*for(x=0;x<5;x++){*/
        /*Player prompt */
//        playerChoice = prompt('Please choose between Rock, Paper, or Scissors', "Rock");
        /*Game*/
    //    console.log(play(playerChoice, computerPlay()));
    //}
 //   if(playerScore>opponentScore){
      //  return "Congratulations, You've won!";
 //   } else if(playerScore<opponentScore){
  //      return "You've lost...";
    //} else{
    //    return "Something went wrong";
  //  }
//}*/
//console.log(game());


