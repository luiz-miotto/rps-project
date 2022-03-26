


function computerPlay(){ 
    let rpsOptions = [
    'Rock',
    'Paper',
    'Scissors'
    ];

    return computerMath = rpsOptions[Math.floor(Math.random()*rpsOptions.length)];
    
}






function playerInputCapitalizer(string){
    string = prompt("Rock, Paper, or Scissors?");
    let first = string.substring(0,1); /// this extracts just the first letter
    let capitalized = first.toUpperCase();  /// this uppercases it
    let rest = string.substring(1); /// this extracts the rest of the string
    let undercase = rest.toLowerCase(); /// this makes the rest lowercase
    return final = capitalized + undercase;
    
    }


let playerScore = 0;
let computerScore = 0;
let scoreAnnouncer;




function myGame(playerSelection, computerSelection){
    var gameRound = 0;
    var roundPlayer; 
    while (gameRound < 5 ){
        gameRound++;
        roundPlayer = playRound(playerSelection, computerSelection);
        var playerSelection = playerInputCapitalizer();
        var computerSelection = computerPlay();
        scoreAnnouncer = announceScore(playerSelection,playerScore,computerSelection,computerScore); 
    }

}

function announceScore(playerSelection,playerScore,computerSelection,computerScore){
    console.log(`The player selected ${playerSelection}. The player score is ${playerScore}`);
    console.log(`The computer selected ${computerSelection}. The computer's score is ${computerScore}`);
}



        function playRound(playerSelection, computerSelection){
            if (playerSelection=="Rock" && computerSelection=="Scissors"){
                return playerScore++;
            } else if ( playerSelection==="Rock" && computerSelection==="Rock"){
                return roundCounter=`${playerSelection} ties ${computerSelection}. You tied!`;
            } else if ( playerSelection==="Rock" &&  computerSelection==="Paper"){
                return roundCounter=`${computerSelection} beats ${playerSelection}. You lose!`, ++computerScore;
            } else if ( playerSelection==="Paper" && computerSelection==="Rock"){
                return roundCounter=`${playerSelection} beats ${computerSelection}. You win!`, ++playerScore;
            } else if (playerSelection==="Paper" && computerSelection==="Paper"){
                return roundCounter=`${playerSelection} ties with ${computerSelection}. You tied!`;
            } else if (playerSelection==="Paper" && computerSelection==="Scissors"){
                return roundCounter=`${computerSelection} beats ${playerSelection}. You lose!`, ++computerScore;
            } else if (playerSelection==="Scissors" && computerSelection==="Paper"){
                return roundCounter= `${playerSelection} beats ${computerSelection}. You win!`, ++playerScore;
            }  else if (playerSelection==="Scissors" && computerSelection==="Scissors"){
                return roundCounter=`${playerSelection} ties with ${computerSelection}. You tied!`;
            }  else if (playerSelection==="Scissors" && computerSelection==="Rock"){
                return roundCounter=`${computerSelection} beats ${playerSelection}. You lose!`, ++computerScore;
            };
        };






/*
function playerCounter(){
    for( let playerPoint==0; playerPoint> 3; playerPoint++){

    }
}
*/