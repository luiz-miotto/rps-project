


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



let scoreAnnouncer;




function myGame(playerSelection, computerSelection){
    var gameRound = 0;
    var roundPlayer; 
   
    while (gameRound < 5 && playerScore < 3 && computerScore < 3){
        
        
        var playerSelection = playerInputCapitalizer();
        var computerSelection = computerPlay();
        gameRound++;
        console.log(`gameRound is ${gameRound}`);
        roundPlayer = playRound(playerSelection, computerSelection);
        gameWinner = winDeterminer(playerScore,computerScore);
        
    }

}

function winDeterminer(playerScore,computerScore){
    if (playerScore === 3){
        console.log(`Player has ${playerScore} points. The player wins!`);
    } else if (computerScore === 3){
        console.log(`Computer has ${computerScore} points. The computer wins!`)
    }
}


var playerScore = 0;
var computerScore = 0;

        function playRound(playerSelection, computerSelection){
            if (playerSelection=="Rock" && computerSelection=="Scissors"){
                 return playerScore = ++playerScore , console.log(`${playerSelection} beats ${computerSelection}. You win! Player: ${playerScore} computer: ${computerScore}`);
            } else if ( playerSelection==="Rock" && computerSelection==="Rock"){
                console.log(`${playerSelection} ties ${computerSelection}. You tied! Player: ${playerScore} computer: ${computerScore}.`) ;
            } else if ( playerSelection==="Rock" &&  computerSelection==="Paper"){
                return ++computerScore, console.log(`${computerSelection} beats ${playerSelection}. You lose! Player: ${playerScore} computer: ${computerScore}`);
            } else if ( playerSelection==="Paper" && computerSelection==="Rock"){
                return playerScore = ++playerScore , console.log(`${playerSelection} beats ${computerSelection}. You win! Player: ${playerScore} computer: ${computerScore}`);
            } else if (playerSelection==="Paper" && computerSelection==="Paper"){
                console.log(`${playerSelection} ties ${computerSelection}. You tied! Player: ${playerScore} computer: ${computerScore}.`) ;
            } else if (playerSelection==="Paper" && computerSelection==="Scissors"){
                return ++computerScore, console.log(`${computerSelection} beats ${playerSelection}. You lose! Player: ${playerScore} computer: ${computerScore}`);
            } else if (playerSelection==="Scissors" && computerSelection==="Paper"){
                return playerScore = ++playerScore , console.log(`${playerSelection} beats ${computerSelection}. You win! Player: ${playerScore} computer: ${computerScore}`);
            }  else if (playerSelection==="Scissors" && computerSelection==="Scissors"){
                console.log(`${playerSelection} ties ${computerSelection}. You tied! Player: ${playerScore} computer: ${computerScore}.`) ;
            }  else if (playerSelection==="Scissors" && computerSelection==="Rock"){
                return ++computerScore, console.log(`${computerSelection} beats ${playerSelection}. You lose! Player: ${playerScore} computer: ${computerScore}`);
            };
        };




