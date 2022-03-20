


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

let playerSelection = playerInputCapitalizer("paper");
let computerSelection = computerPlay();

if (playerSelection==="Rock" && computerSelection==="Scissors"){
    console.log(`${playerSelection} beats ${computerSelection}. You win!`)
} else if ( playerSelection==="Rock" && computerSelection==="Rock"){
    console.log(`${playerSelection} ties ${computerSelection}. You tied!`)
} else if ( playerSelection==="Rock" &&  computerSelection==="Paper"){
    console.log(`${computerSelection} beats ${playerSelection}. You lose!`)
} else if ( playerSelection==="Paper" && computerSelection==="Rock"){
    console.log(`${playerSelection} beats ${computerSelection}. You win!`)
} else if (playerSelection==="Paper" && computerSelection==="Paper"){
    console.log(`${playerSelection} ties with ${computerSelection}. You tied!`)
} else if (playerSelection==="Paper" && computerSelection==="Scissors"){
    console.log(`${computerSelection} beats ${playerSelection}. You lose!`)
} else if (playerSelection==="Scissors" && computerSelection==="Paper"){
    console.log(`${playerSelection} beats ${computerSelection}. You win!`)
}  else if (playerSelection==="Scissors" && computerSelection==="Scissors"){
    console.log(`${playerSelection} ties with ${computerSelection}. You tied!`)
}  else if (playerSelection==="Scissors" && computerSelection==="Rock"){
     console.log(`${computerSelection} beats ${playerSelection}. You lose!`)
};


