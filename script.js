// 0 - rock
// 1 - paper
// 2 - scissors

function getComputerChoice()
{
    return Math.floor(Math.random() * 3 );
}

function indexPlayerChoice(x)
{
    let choice = -1;
    if(x.toUpperCase() === "ROCK") choice = 0;
    else if (x.toUpperCase() === "PAPER") choice = 1;
    else if (x.toUpperCase() === "SCISSORS") choice = 2;
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

function getPlayerChoice()
{
    return 0;//prompt("Choose rock/paper/scissors");
}

function playGame()
{
    let playerPoints = 0;
    let computerPoints = 0;
    let answer;
    
    while( playerPoints < 5 && computerPoints < 5 )
    {
        playerChoice = indexPlayerChoice(getPlayerChoice());

        if(playerChoice === -1) // check if user input was rock/paper/scissors
        {
            //alert("NOT A VALID CHOICE");
        }
        else // Only play game if proper user input
        {
            answer = playRound(playerChoice, getComputerChoice());

            if(answer.charAt(0) === "W") playerPoints++;
            else if(answer.charAt(0) === "L") computerPoints++;

            //alert(answer);
            //alert("Score is " + playerPoints + " | " + computerPoints);
        }
    }

    //if(computerPoints === 5) alert("COMPUTER WINS!");
    //else alert("YOU WIN, PLAYER!");

    //if(prompt("Play again?", "Yes").toUpperCase() === "YES")
    //playGame();
}

//playGame();

const result = document.querySelector('#result');
const buttons = document.querySelectorAll('.playerSelectionButton');

    buttons.forEach(i =>
    {
        i.addEventListener('click', e => 
        {
            result.textContent = playRound(parseInt(i.id), getComputerChoice());
        })
    })