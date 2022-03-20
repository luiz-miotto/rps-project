


function computerPlay(){ 
    let rpsOptions = [
    'Rock',
    'Paper',
    'Scissors'
    ];

    return computerMath = rpsOptions[Math.floor(Math.random()*rpsOptions.length)];
    
}






function playerInputCapitalizer(playerInput){
    let string = playerInput;  
    let first = string.substring(0,1); /// this extracts just the first letter
    let capitalized = first.toUpperCase();  /// this uppercases it
    let rest = string.substring(1); /// this extracts the rest of the string
    let undercase = rest.toLowerCase(); /// this makes the rest lowercase
    return final = capitalized + undercase;
    
    }

let playerSelection = playerInputCapitalizer("Rock");
let computerSelection = computerPlay();


function playRound(playerSelection, computerSelection){
if (playerSelection==="Rock" && computerSelection==="Scissors"){
    return roundCounter=`${playerSelection} beats ${computerSelection}. You win!`;
} else if ( playerSelection==="Rock" && computerSelection==="Rock"){
    return roundCounter=`${playerSelection} ties ${computerSelection}. You tied!`;
} else if ( playerSelection==="Rock" &&  computerSelection==="Paper"){
    return roundCounter=`${computerSelection} beats ${playerSelection}. You lose!`;
} else if ( playerSelection==="Paper" && computerSelection==="Rock"){
    return roundCounter=`${playerSelection} beats ${computerSelection}. You win!`;
} else if (playerSelection==="Paper" && computerSelection==="Paper"){
    return roundCounter=`${playerSelection} ties with ${computerSelection}. You tied!`;
} else if (playerSelection==="Paper" && computerSelection==="Scissors"){
    return roundCounter=`${computerSelection} beats ${playerSelection}. You lose!`;
} else if (playerSelection==="Scissors" && computerSelection==="Paper"){
    return roundCounter= `${playerSelection} beats ${computerSelection}. You win!`;
}  else if (playerSelection==="Scissors" && computerSelection==="Scissors"){
    return roundCounter=`${playerSelection} ties with ${computerSelection}. You tied!`;
}  else if (playerSelection==="Scissors" && computerSelection==="Rock"){
     return roundCounter=`${computerSelection} beats ${playerSelection}. You lose!`;
};
};

/*
function game(){ 
    for (let gameRound = 0; gameRound > 5; gameround++)
    if
}

will use function to keep track of string provided byy the playRound string

function playerCounter(){
    for( let playerPoint==0; playerPoint> 3; playerPoint++){

    }
}
*/