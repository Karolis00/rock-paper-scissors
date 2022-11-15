// 0 - rock
// 1 - paper
// 2 - scissors

function getComputerChoice()
{
    return Math.floor(Math.random() * 3 );
}

function indexPlayerChoice(x)
{
    let choice;
    if(x.toUpperCase() === "ROCK") choice = 0;
    else if (x.toUpperCase() === "PAPER") choice = 1;
    else if (x.toUpperCase() === "SCISSORS") choice = 2;
    else choice = -1; // bad input
    return choice;
}

function playRound(playerChoice, computerChoice)
{
    let result = "";

    if(playerChoice === computerChoice) result = "Draw!";
    else if ( playerChoice === computerChoice + 1 ||  
        playerChoice === computerChoice - 2) result = "Win! " + toText(playerChoice) + " beats " + toText(computerChoice).toLowerCase();
    else result = "Lose! " + toText(computerChoice)+ " beats " + toText(playerChoice).toLowerCase();
    return result;
}

function toText(x)
{
    if(x === 0) return "Rock";
    if(x === 1) return "Paper";
    return "Scissors";
}
