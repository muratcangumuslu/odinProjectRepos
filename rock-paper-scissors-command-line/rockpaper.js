/* The part below has the variables which will be used for the game. Their names are mostly self explicatory. computerChoiceDecider is for the function which uses some math to generate a random number, i will explain its role further on that function's part. userCounter and compCounter are used in the function which checks if the user or the computer has reached 3. It would be better for someone without much knowledge on javascript to read the explanations for the functions below in the following order to be able to understand them easier.

1. compChoice()
2. game()
3. validAnswerChecker()
4. main()

*/

let userChoice = ""
let computerChoice = "";
let computerChoiceDecider;
let result;
let userCounter = 0;
let compCounter = 0;


/* main()
    Here, we first let the user know what the site is about: a rock paper scissors game, and how to win. The first while part is a loop used to keep the functions inside the curly brackets working while neither the userCounter nor the compCounter has reached 3. Basically it checks if the game should end or continue. The if part is to check the winner. If the userCounter has reached 3 then the user is informed that he/she has won otherwise the user is informed that the computer has won. Both parts tell the user to refresh the page to play again.
*/

function main () {

    alert("This is a simple command line rock paper scissors game. \nChoose one of the three options to see if you win against the computer. First one to reach 3 wins.")

    while (userCounter < 3 && compCounter < 3) {
        compChoice()
        game()
        validAnswerChecker()
    }

    if (userCounter == 3) {
        alert("You have won. Refresh the page to play again.")
    } else alert("The computer has won. Refresh the page to play again")
}




/* game()
This is the main function. Here we get the user's choice with the prompt function of js and assign it to the variable userChoice. And later we compare the value of userChoice with the computerChoice variable from the compChoice function. We let the user know about the result with alert function of the jf according to the choices both by the user and the computer.
*/

function game() {
    userChoice = prompt("What is your choice?").toLowerCase();
    if (userChoice === computerChoice) {
        result = alert("Computer has choosen the same. It is a draw.");
    } else if (userChoice === "rock" && computerChoice === "paper") {
        result = alert("Computer has chosen paper. You have lost");
        compCounter ++;
    } else if (userChoice === "rock" && computerChoice === "scissors") {
        result = alert("Computer has chosen scissors. You have won");
        userCounter ++;
    } else if (userChoice === "paper" && computerChoice === "scissors") {
        result = alert("Computer has chosen scissors. You have lost");
        compCounter ++;
    } else if (userChoice === "paper" && computerChoice === "rock") {
        result = alert("Computer has chosen rock. You have won");
        userCounter ++;
    } else if (userChoice === "scissors" && computerChoice === "rock") {
        result = alert("Computer has chosen rock. You have lost");
        compCounter ++;
    } else if (userChoice === "scissors" && computerChoice === "paper") {
        result = alert("Computer has chosen paper. You have won");
        userCounter ++;
    }
}

/* validAnswerChecker() 
This function checks if the user input is acceptable for the game of rock, paper, scissors. If userChoice is not rock, nor paper, nor scissors it alerts the user telling him/her to type a valid answer.
*/

function validAnswerChecker() {
    if (userChoice !== "rock" && userChoice !== "scissors" && userChoice !== "paper") {
        alert("Please choose a valid option (rock, paper, or scissors).");
    }
}



/* compChoice() 
This function decides the computer's choice. In the part between the curly brackets, on the first line, Math.random() generates a random number greater than or equal to 0.0 and less than 1.0. As we have three options (rock, paper, scissors) we multiply that number with 3 and use Math.floor() function to round that number down to the nearest integer. As a result the variable computerChoiceDecider gets a random value out of 0, 1 and 2. In the part which starts with if we convert these random numbers to actual options of our game. The first if statement takes the case of computerChoiceDecider being equal to 0 and assigns the string "rock" to our computerChoice variable if this case is true. If it is not, our function moves on to the else if part and checks if our decider is equal to 1 and assigns the string "paper" to our computerChoice. If both of our first cases are not true, then the else part assigns the string "scissor" to our computerChoice as it is the only one left. 
 */

function compChoice () {
    computerChoiceDecider = Math.floor(Math.random() * 3);
    if (computerChoiceDecider == 0) {
        computerChoice = "rock";
    } else if (computerChoiceDecider == 1) {
        computerChoice = "paper";
    } else computerChoice = "scissors";
}

main()