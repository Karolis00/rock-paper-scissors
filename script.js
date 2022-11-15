// 0 - rock
// 1 - paper
// 2 - scissors

function getComputerChoice()
{
    return Math.floor(Math.random() * 3 );
}

function getPlayerChoice(x)
{
    let choice;
    if(x.toUpperCase() === "ROCK") choice = 0;
    else if (x.toUpperCase() === "PAPER") choice = 1;
    else if (x.toUpperCase() === "SCISSORS") choice = 2;
    else choice = -1; // bad input
    return choice;
}

