


function computerPlay(){ 
    let rpsOptions = [
    'rock',
    'paper',
    'scissors'
    ];

    return computerMath = rpsOptions[Math.floor(Math.random()*rpsOptions.length)];
}


let playerSelection ="scissors";
let computerSelection = computerPlay();

if (playerSelection==="rock" && computerSelection==="scissors"){
    console.log(`${playerSelection} beats ${computerSelection}. You win!`)
} else if ( playerSelection==="rock" && computerSelection==="rock"){
    console.log(`${playerSelection} ties ${computerSelection}. You tied!`)
} else if ( playerSelection==="rock" &&  computerSelection==="paper"){
    console.log(`${computerSelection} beats ${playerSelection}. You lose!`)
} else if ( playerSelection==="paper" && computerSelection==="rock"){
    console.log(`${playerSelection} beats ${computerSelection}. You win!`)
} else if (playerSelection==="paper" && computerSelection==="paper"){
    console.log(`${playerSelection} ties with ${computerSelection}. You tied!`)
} else if (playerSelection==="paper" && computerSelection==="scissors"){
    console.log(`${computerSelection} beats ${playerSelection}. You lose!`)
} else if (playerSelection==="scissors" && computerSelection==="paper"){
    console.log(`${playerSelection} beats ${computerSelection}. You win!`)
}  else if (playerSelection==="scissors" && computerSelection==="scissors"){
    console.log(`${playerSelection} ties with ${computerSelection}. You tied!`)
}  else if (playerSelection==="scissors" && computerSelection==="rock"){
     console.log(`${computerSelection} beats ${playerSelection}. You lose!`)
};