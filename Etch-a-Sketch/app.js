const containerDiv = document.querySelector("#container");

function makeBoard(rows, columns) {

    containerDiv.style.setProperty("--grid-rows", rows);
    containerDiv.style.setProperty("--grid-columns", columns);
    containerDiv.style.width = "650px";
    containerDiv.style.height = "650px";
    containerDiv.style.overflow = "hidden";
    for (i = 0; i < (rows * columns); i++) {
        let square = document.createElement("div");
        square.style.minHeight = "0";
        square.style.minWidth = "0";
        square.style.overflow = "hidden";
        containerDiv.appendChild(square).className = "grid-item";
        square.addEventListener("mouseover", () => {
            if (square.style.backgroundColor == "") {
                let color = randomColor();
                square.style.backgroundColor = color;
                square.style.opacity = ".50";
                return square.style.backgroundColor;
            }

            // I could not really find a solution to make the squares gradually darker. I have found this one on the internet, it makes them more opaque, not the same thing but i will keep it until i find a better solution.

            if ((square.style.backgroundColor !== "") && (square.style.opacity <= "0.90")) {
                square.style.opacity = parseFloat(square.style.opacity) + 10;
                return square.style.backgroundColor;
            }
        })
    } 
}

// resets the board and changes its size using the user input for rows and columns

function resetBoard() {
    const resetButton = document.querySelector("#resetButton");
    resetButton.addEventListener("click", () => {
        document.querySelectorAll(".grid-item").forEach(e => e.remove());
        let userInput = prompt("Please enter the number of squares per side (biggest number allowed is 100 )");
        if (userInput > 100) {
            alert("Please choose a smaller number");
            return;
        }
        rows = userInput;
        columns = userInput;
        makeBoard(rows, columns)
    })
}

function randomColor (){
    function randomInteger(max) {
        return Math.floor(Math.random()*(max + 1));
    }
    randomInteger();
    let r = randomInteger(255);
    let g = randomInteger(255);
    let b = randomInteger(255);
    return "rgb(" + r + "," + g + "," + b + ")"
}

makeBoard(20, 20)
resetBoard()
