// output: computer had one of  the three powers
function getComputerChoice(){
    return choiceRandomForComputer()
}

// output: random number and assign one of the powers
function choiceRandomForComputer(){
    let num = Math.floor(Math.random()*10)
    if(num < 3){
        return 'rock'
    } else if(num >= 3 && num <= 6){
        return 'paper'
    } else if(num > 7){
        return 'scissors'
    }
}

//output: user input his power
function getUserChoice(){
    let userChoice = prompt("Choose your power: rock, paper, scissors");

    return userChoice.toLocaleLowerCase();
}

// Play a single round 
function playRound(playerSelection, computerSelection){
    computerSelection = getComputerChoice();
    playerSelection = getUserChoice();

    let roundResult;

    switch(playerSelection === 'rock'){
        case(computerSelection ==='paper'):
            roundResult = 'You lose! ' + computerSelection + ' beat ' + playerSelection;
            break;

        case(computerSelection === 'scissors'):
            roundResult = 'You win! ' + computerSelection + ' defeat ' + playerSelection;
            break;

        case(computerSelection === 'rock'):
            roundResult = 'That\'s draw! ' + computerSelection + ' equal ' + playerSelection;
            break;
    }

    switch(playerSelection === 'paper'){
        case(computerSelection === 'scissors'):
            roundResult = 'You lose! ' + computerSelection + ' beat ' + playerSelection;
            break;

        case(computerSelection === 'rock'):
            roundResult = 'You win! ' + computerSelection + ' defeat ' + playerSelection;
            break;

        case(computerSelection === 'paper'):
            roundResult = 'That\'s draw! ' + computerSelection + ' equal ' + playerSelection;
            break;
    }

    switch(playerSelection === 'scissors'){
        case(computerSelection === 'rock'):
            roundResult = 'You lose! ' + computerSelection + ' beat ' + playerSelection;
            break;

        case(computerSelection === 'rock'):
            roundResult = 'You win! ' + computerSelection + ' defeat ' + playerSelection;
            break;

        case(computerSelection === 'scissors'):
            roundResult = 'That\'s draw! ' + computerSelection + ' equal ' + playerSelection;
            break;
    }

    return roundResult;
}

function playGame(){
    for(let i = 0; i < 5; i++){
        console.log(playRound())
    }

}

playGame()

