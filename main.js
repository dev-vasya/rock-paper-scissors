// output: computer had one of  the three powers
function getComputerChoice(){
    let num = Math.floor(Math.random()*3)
    if(num == 0){
        return 'rock'
    } else if(num == 1){
        return 'paper'
    } else if(num == 2){
        return 'scissors'
    }
}

//output: user input his power
function getUserChoice(){
    let userChoice = prompt("Choose your power: rock, paper, scissors");

    return userChoice.toLowerCase();
}

// Play a single round 
function playRound(){
    computerSelection = getComputerChoice();
    playerSelection = getUserChoice();

    let roundResult;

    if(playerSelection == 'paper' && computerSelection == 'paper' 
    || playerSelection == 'rock' && computerSelection == 'rock' 
    || playerSelection == 'scissors' && computerSelection == 'scissors'){
        return roundResult = 'This\'s draw ' + playerSelection + " equal " + computerSelection;

    } else if(playerSelection == 'paper' && computerSelection == 'scissors' 
    || playerSelection == 'scissors' && computerSelection == 'rock' 
    || playerSelection == 'rock' && computerSelection == 'paper'){
        return roundResult = 'You lose! ' + playerSelection + ' defeat ' + computerSelection;

    } else if(playerSelection == 'paper' && computerSelection == 'rock' 
    || playerSelection == 'rock' && computerSelection == 'scissors' 
    || playerSelection == 'scissors' && computerSelection == 'paper'){
        return roundResult = 'You win! ' + playerSelection + ' beat ' + computerSelection; 
    } else{
        return roundResult = "You lose without powerssssssssss"
    }
}

function playGame(){
    for(let i = 0; i < 3; i++){
        console.log(playRound())
    }

}

playGame()

