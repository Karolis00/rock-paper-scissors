// 0 - rock
// 1 - paper
// 2 - scissors

function getComputerChoice()
{
    return Math.floor(Math.random() * 3 );
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

function gameOver(playerPoints, computerPoints)
{
    if(playerPoints === 5) result.textContent = "Player wins!";
    else if(computerPoints === 5) result.textContent = "Computer wins!";
    else return 1;
}

function playGame()
{
    let playerPoints = 0;
    let computerPoints = 0;
    let answer;

        buttons.forEach(button =>
        {
            button.addEventListener('click', e => 
            {
                answer = playRound(parseInt(button.id), getComputerChoice());

                if(answer.charAt(0) === "W") playerPoints++;
                else if(answer.charAt(0) === "L") computerPoints++;

                result.textContent = answer;
                score.textContent = `${playerPoints}|${computerPoints}`;

                if(!gameOver(playerPoints, computerPoints))
                {
                    playerPoints = 0;
                    computerPoints = 0;
                }
            })
        })
}

const result = document.querySelector('#result');
const score = document.querySelector('#score');
const buttons = document.querySelectorAll('.playerSelectionButton');

playGame();
