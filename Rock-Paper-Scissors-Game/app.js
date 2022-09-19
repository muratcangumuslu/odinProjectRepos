let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock-id");
const paper_div = document.getElementById("paper-id");
const scissors_div = document.getElementById("scissors-id");


function getComputerChoice() {
    const choices = ["rock-id", "paper-id", "scissors-id"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === "rock-id") return "Rock";
    if (letter === "paper-id") return "Paper";
    return "Scissors";
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = convertToWord(userChoice) + " beat/s " + convertToWord(computerChoice) + ", you win! ";
}

function lose(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = convertToWord(userChoice) + " lose/s to " + convertToWord(computerChoice) + ", you lose! ";
}

function draw(userChoice, computerChoice) {
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = convertToWord(userChoice) + " equal/s " + convertToWord(computerChoice) + ", it's a draw! ";
}



function game(userChoice) {
    const computerChoice = getComputerChoice();;
    if (userScore == 5 || computerScore == 5) alert("The game has ended, refresh the page to play again!");
    else {
        switch (userChoice + computerChoice) {
            case "rock-idscissors-id":
            case "paper-idrock-id":
            case "scissors-idpaper-id":
                win(userChoice, computerChoice);
                break;
            case "rock-idpaper-id":
            case "paper-idscissors-id":
            case "scissors-idrock-id":
                lose(userChoice, computerChoice);
                break;
            case "rock-idrock-id":
            case "paper-idpaper-id":
            case "scissors-idscissors-id":
                draw(userChoice, computerChoice);
                break;
        }
    }
}


function main() {
    rock_div.addEventListener('click', function() {
        game("rock-id");
    })

    paper_div.addEventListener('click', function() {
        game("paper-id");
    })

    scissors_div.addEventListener('click', function() {
        game("scissors-id");
    })
}

main();