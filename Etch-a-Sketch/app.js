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
            square.style.backgroundColor = "black";
        })
    } 
}
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

makeBoard(20, 20)
resetBoard()
