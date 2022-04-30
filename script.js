var gameRound = 0;

var playerScore = 0;
var computerScore = 0;



const roundDisplay = document.querySelector('#roundDisplay');
roundDisplay.textContent = "This is where the round score goes";
var changeRound = roundDisplay.textContent;

const scoreDisplay = document.querySelector('#scoreDisplay');       
scoreDisplay.textContent = "Display player score here!";


var testVariable = "Hello, this is my  variable.";
var roundScoreResults;


function roundScoreDisplayer(){ 
    
    roundDisplay.textContent = roundScoreResults;
}



const paperButton = document.querySelector('#paperButton');
paperButton.addEventListener('click',()=>{
    alert('You pressed paper')
    myGame("Paper")
    roundScoreDisplayer();
});


const rockButton = document.querySelector('#rockButton');
rockButton.addEventListener('click',()=>{
    alert("You pressed rock.")
    myGame("Rock");
    roundScoreDisplayer();

});


const scissorsButton = document.querySelector('#scissorsButton');
scissorsButton.addEventListener('click',()=>{
    alert("You pressed scissors.")
    myGame("Scissors");
    roundScoreDisplayer();
});

function computerPlay(){ // #3.1 generates random comp choice
    let rpsOptions = [
    'Rock',
    'Paper',
    'Scissors'
    ];

    return computerMath = rpsOptions[Math.floor(Math.random()*rpsOptions.length)];
    
}



var gameRound = 0;

var playerScore = 0;
var computerScore = 0;




function myGame(playerSelection){       //  #1 this initiates the game
  
   
   // while (playerScore <= 5 && computerScore <= 5){   // #2 this keeps the game running as long as
                                                    // the playerScore of compScore do not equal 5
        
        
        var computerSelection = computerPlay();   // #3.1 this triggers function that generates random comp choice
        gameRound++;
        console.log(`gameRound is ${gameRound}`);
        roundPlayer = playRound(playerSelection, computerSelection); //3.2 this triggers function that both increments 
        //player score and compScore, and also logs round winner to console
        gameWinner = winDeterminer(playerScore,computerScore); // #3.3 triggers function that calculates who won the game base
        //on their amount of rounds won
        
  //  }

  
    
}


function winDeterminer(playerScore,computerScore){  /// #3.3 calculates who won the game based on the amounts of round won
    if (playerScore === 5){
        console.log(`Player has ${playerScore} points. The player wins!`);
    } else if (computerScore === 5){
        console.log(`Computer has ${computerScore} points. The computer wins!`)
    }
}


function playRound(playerSelection, computerSelection){   // #3.2 increments playerScore and compScore, and logs round winnter to console
    if (playerSelection=="Rock" && computerSelection=="Scissors"){
         return playerScore = ++playerScore , roundScoreResults = `${playerSelection} beats ${computerSelection}. You win! Player: ${playerScore} computer: ${computerScore}`;
    }else if ( playerSelection=="Rock" &&  computerSelection==="Paper"){
        return computerScore = ++computerScore, roundScoreResults = `${computerSelection} beats ${playerSelection}. You lose! Player: ${playerScore} computer: ${computerScore}`;
    } else if ( playerSelection=="Paper" && computerSelection==="Rock"){
        return playerScore = ++playerScore , roundScoreResults = `${playerSelection} beats ${computerSelection}. You win! Player: ${playerScore} computer: ${computerScore}`;
    }else if (playerSelection==="Paper" && computerSelection==="Scissors"){
        return ++computerScore, roundScoreResults= `${computerSelection} beats ${playerSelection}. You lose! Player: ${playerScore} computer: ${computerScore}`;
    } else if (playerSelection==="Scissors" && computerSelection==="Paper"){
        return playerScore = ++playerScore , roundScoreResults = `${playerSelection} beats ${computerSelection}. You win! Player: ${playerScore} computer: ${computerScore}`;
    } else if (playerSelection==="Scissors" && computerSelection==="Rock"){
        return ++computerScore, roundScoreResults = `${computerSelection} beats ${playerSelection}. You lose! Player: ${playerScore} computer: ${computerScore}`;
    }else if (playerSelection==computerSelection){
        roundScoreResults = `${playerSelection} ties ${computerSelection}. You tied! Player: ${playerScore} computer: ${computerScore}.` ;
    };
};




